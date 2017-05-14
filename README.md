Tajawal Flight Booking App Test Automation

Tajawal (http://www.tajawal.com) is an online flight and hotels booking app.
Test Automation done by Nauman Sheikh.
Platform

Languages Used

Ruby
JavaScript
HTML5
Notable Libraries

Rails 4.2.0
Server Platform

Ruby 2.3.3
PostgreSQL 9+
External Services

Amazon AWS
Development


To run this app you'll likely need a rough understanding of how Rails apps work these days. You will also need: 
PostgreSQL 9.4+
Amazon AWS
Puma Server
Paperclip gem
First, clone the repo (ideally from your own fork):

git clone git@github.com:nomi474/pinterest-app.git

Then move into that directory install the gems using Bundler:

bundle install

Next you will need to configure your database.yml file.

cp config/database.example.yml config/database.yml

You'll likely need to edit those settings for your local machine.

Now you need to create and set up the database:

rake db:setup

In particular, you may want to check your username in psql with command: $ psql which should bring up your psql command line username=#. You can update your config/database.yml accordingly. Also,you may create new PG database.
S3 is used in development

Due to the plugins used for handling uploads, S3 support is required even in development. It's not ideal, but you'll need to fill out those S3 keys in your .env file with details for your S3 bucket.

In both development and production you will need to configure CORS correctly on Amazon.

Testing with RSpec

To start up the automated testing you might first need to create and migrate the test DB:
RAILS_ENV=test rake db:create
RAILS_ENV=test rake db:migrate

Then you can start up the automated tests with:

rake spec