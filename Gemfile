source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.5.1"

gem "rails", "~> 5.2.1"
gem "sqlite3"
gem "puma", "~> 3.11"
gem "sass-rails", "~> 5.0"
gem "uglifier", ">= 1.3.0"

gem "turbolinks", "~> 5"
gem "jbuilder", "~> 2.5"
gem "webpacker", "~> 3.5"
gem "slim"

gem "bootsnap", ">= 1.1.0", require: false

group :development, :test do
  gem "pry"
  gem "standard"
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem "listen", ">= 3.0.5", "< 3.2"
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

group :test do
  gem "rspec-rails", "~> 3.8"
  gem "capybara", ">= 2.15"
  gem "selenium-webdriver"
  gem "chromedriver-helper"
end
