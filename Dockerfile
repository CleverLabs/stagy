FROM ruby:2.6.3-alpine3.10

RUN apk add --no-cache build-base ca-certificates curl git nginx tzdata sudo postgresql-client postgresql-dev nodejs yarn openssh
RUN gem install bundler -v 1.17.3
RUN bundle config silence_root_warning 1

ENV APP_ROOT /deployqa
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT

COPY Gemfile Gemfile.lock $APP_ROOT/
RUN bundle install

COPY package.json yarn.lock $APP_ROOT/
RUN yarn

COPY . $APP_ROOT
RUN bundle exec rake assets:precompile
