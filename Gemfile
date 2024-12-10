# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.3.2'

# Use a specific version of Rails to ensure compatibility
gem 'rails'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Use PostgreSQL for the database
gem 'pg', '~> 1.5', '>= 1.5.6'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma'

# Use for asynchronous I/O primitives for scalable network clients and servers
# Fix: An error occurred while installing nio4r (2.5.8), and Bundler cannot continue.
gem 'nio4r', '~> 2.5.9'

# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem 'jsbundling-rails'

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Use Redis adapter to run Action Cable in production
gem 'redis', '~> 4.0'

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem 'image_processing', '~> 1.2'

# Gem to reduce boot times through caching
gem 'bootsnap', require: false

# Use Sass to process CSS
gem 'sassc-rails'

# Add bcrypt for secure password handling
gem 'bcrypt', '~> 3.1.7'

# Security checker for project dependencies to detect vulnerabilities
gem 'bundler-audit'

# Static security analysis tool for Ruby on Rails applications
gem 'brakeman'

group :development, :test do
  # Debugging support
  gem 'debug', platforms: %i[mri mingw x64_mingw]
end

group :development do
  # Use console on exceptions pages
  gem 'web-console'

  gem 'rubocop', require: false
  gem 'rubocop-github', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false

  # Add speed badges
  gem 'rack-mini-profiler'
end

group :test do
  # Use system testing
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'webdrivers', '5.3.1'
end
