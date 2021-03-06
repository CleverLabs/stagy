# frozen_string_literal: true

module ProjectHelper
  PROVIDER_IMAGE_PATH = {
    ::ProjectsConstants::Providers::VIA_SSH => "media/images/logos/git-logo-black.svg",
    ::ProjectsConstants::Providers::GITHUB => "media/images/logos/github-logo.svg",
    ::ProjectsConstants::Providers::GITLAB => "media/images/logos/gitlab-logo.svg"
  }.freeze

  def link_to_project_orgatnization(project, size: "32x32")
    return project_integration_logo(project, size: size) if project.integration_type == ProjectsConstants::Providers::VIA_SSH

    router = project.integration_type == ::ProjectsConstants::Providers::GITHUB ? github_router : gitlab_router
    link_to(router.page_url(project.name), target: :_blank, rel: :noopener) do
      project_integration_logo(project, size: size)
    end
  end

  def project_integration_logo(project, size: "32x32")
    image_path = PROVIDER_IMAGE_PATH.fetch(project.integration_type)
    image_pack_tag(image_path, size: size)
  end
end
