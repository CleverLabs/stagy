# Stagy

Stagy is an automated tool for application deployment. It helps teams to make deployment and testing processes simple and easy to maintain.

## Installation
 
 - Create Github Application
 - Create Slack Application
 - Create Heroku account
 
#### Configure Github App
  
  1. Set 'Request user authorization during installation' to `true`
  2. Enable permissions:
     - content - read
     - issues - read/write
     - pull requests - read/write
     - email addresses - read-only
  3. Enable webhooks:
     - pull_requests
  4. Set 'Webhook URL' to your app
      ```
      https://<your_app_address>/webhooks/github
      ```
      (you can use `https://smee.io/` for local development)
  5. Set 'Webhook secret'
 
#### Configure Slack App

Enable `incoming-webhooks` it's used to send notifications to your slack channel
 
#### Configure Stagy

 1. Setup ENV variables, as described in `.env` file
 2. Install the Gems `bundle install`
 3. Setup DB `bundle exec rake db:setup`
 4. Run seeds `bundle exec rake db:seed_fu`
 5. Run server `bundle exec rails s`
 6. Run sidekiq `bundle exec sidekiq`
 
## Usage

1. Create a Project (one of the following):

    - Install the Github application and allow access to at least one repository
    - Manually by the 'Create new Project' button 
 
2. Create project instance (one of the following):

    - Create pull_request in the repository
    - Manually by the button 'Create'
 
3. Deploy

    - [Deployment Wiki](https://github.com/CleverLabs/stagy/wiki/Deployment)

## License

 [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.html)
