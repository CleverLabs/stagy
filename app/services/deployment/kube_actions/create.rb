# frozen_string_literal: true
require 'blanket'

module Deployment
  module KubeActions
    class Create
      NAMESPACE = {
        apiVersion: "v1",
        kind: "Namespace",
        metadata: {
          name: nil,
          labels: { name: nil }
        }
      }

      def initialize(configurations, state_machine)
        @configurations = configurations
        @state_machine = state_machine
      end

      def call
        @configurations.each_with_object(@state_machine.start) do |configuration, state|
          @state_machine.context = configuration
          deploy_configuration(configuration, state)
        end
        @state_machine.finalize
      end

      private

      class Service
        include HTTParty
        base_uri ENV["DEPLOYQA_SERVICE_URL"]
      end

      def deploy_configuration(configuration, state)
        state.add_state(:create_server) do
          # create client
          kube_cluster_config = Kubeclient::Config.read("../deployqa-service/cluster_creds.yaml")
          kube_client = Kubeclient::Client.new(kube_cluster_config.context.api_endpoint, "v1", ssl_options: kube_cluster_config.context.ssl_options, auth_options: kube_cluster_config.context.auth_options)

          # create namespace
          namespace_spec = Kubeclient::Resource.new(metadata: { labels: {} })
          namespace_spec.metadata.name = configuration.application_name
          namespace_spec.metadata.labels.name = configuration.application_name
          kube_client.create_namespace(namespace_spec)

          # build image
          # server = ::Blanket.wrap(ENV["DEPLOYQA_SERVICE_URL"])
          # server.builds(configuration.application_name).clone_code.post(body: { repo_path: "CleverLabs/deployqa", repo_uri: "https://github.com/CleverLabs/deployqa.git" })
          # server.builds(configuration.application_name).build.post(body: { repo_path: "CleverLabs/deployqa", repo_uri: "https://github.com/CleverLabs/deployqa.git" })
          # server.builds(configuration.application_name).load_to_cluster.post(body: { repo_path: "CleverLabs/deployqa", repo_uri: "https://github.com/CleverLabs/deployqa.git" })
          Service.post("/builds/#{configuration.application_name}/clone_code", body: { repo_path: "CleverLabs/deployqa".downcase, repo_uri: "https://github.com/CleverLabs/deployqa.git" }, timeout: 1200)
          Service.post("/builds/#{configuration.application_name}/build", body: { repo_path: "CleverLabs/deployqa".downcase, repo_uri: "https://github.com/CleverLabs/deployqa.git" }, timeout: 1200)
          Service.post("/builds/#{configuration.application_name}/load_to_cluster", body: { repo_path: "CleverLabs/deployqa".downcase, repo_uri: "https://github.com/CleverLabs/deployqa.git" }, timeout: 1200)

          # create pod
          web_pod_spec = Kubeclient::Resource.new(metadata: { labels: {} }, spec: { containers: [{ ports: [{}] }] })
          web_pod_spec.metadata.name = "web"
          web_pod_spec.metadata.namespace = configuration.application_name
          web_pod_spec.metadata.labels.app = "web"
          container_spec = web_pod_spec.spec.containers[0]
          container_spec.name = "web"
          container_spec.image = "CleverLabs_deployqa:#{configuration.application_name}"  # change!!!
          container_spec.args = "bundle exec rails s -p 80 -b 0.0.0.0".split
          container_spec.ports[0].containerPort = 80
          container_spec.env = [
            { "name" => "RAILS_ENV", "value" => "production" },
            { "name" => "SECRET_KEY_BASE", "value" => "d01cc0d6-f96c-4c34-9411-f28e54a01ee5" },
            { "name" => "RAILS_LOG_TO_STDOUT", "value" => "true" },
            { "name" => "DB_HOST", "value" => "postgres" },
            { "name" => "DB_NAME", "value" => "deployqa" },
            { "name" => "DB_USERNAME", "value" => "user" },
            { "name" => "DB_PASSWORD", "value" => "password" }
          ]
          kube_client.create_pod(web_pod_spec)

          # create service
          web_service_spec = Kubeclient::Resource.new(metadata: { }, spec: { type: "NodePort", selector: {}, ports: [{ protocol: "TCP", port: 80, targetPort: 80, nodePort: 31000 }] })
          web_service_spec.metadata.name = "web"
          web_service_spec.metadata.namespace = configuration.application_name
          web_service_spec.spec.selector.app = "web"
          # web_service_spec.spec.ports[0] = { "protocol" => "TCP", "port" => 80, "targetPort" => 80, "nodePort" => 31000 }
          kube_client.create_service(web_service_spec)

          ReturnValue.ok
        end
      end

      def create_server(configuration, state)
        server = ::Blanket.wrap(ENV["DEPLOYQA_SERVICE_URL"])
        server.application(configuration.application_name).post(body: { repo: { uri: repo_uri(configuration.repo_configuration) } })
      end

      def repo_uri(repo_configuration)
        if repo_configuration.project_integration_type == ProjectsConstants::Providers::VIA_SSH
          { uri: repo_configuration.repo_path, private_key: repo_configuration.project_integration_id }
        else
          { uri: GithubAppClient.new(repo_configuration.project_integration_id).repo_uri(repo_configuration.repo_path) }
        end
      end
    end
  end
end
