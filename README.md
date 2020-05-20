# Contact manager app

## Description

Simple application for managing contacts list. 
This project uses Rails API as back-end and React app as front-end(which is installed in `client` folder)

## Getting Started

### Prerequisites
Before you started, make sure that you have installed and set-up properly:
- Ruby > 2.6.3
- Rails 6.0.3
- PostgreSQL

- nvm
- node 14.2.0

### Installation
1. Clone the project
2. Setup RAILS API:
   - `gem install bundler` to install bundler
   - `bundle install` - to install all dependent gems.
   - Create, migrate and seed the database:
   ```
    rails db:create
    rails db:migrate
    rails db:seed
   ```
3. Run the server on http://localhost:3000/
   - `rails s`
4. `cd client/` go to client folder
5. Install required node version `nvm install`
6. Use required node version `nvm use`
7. Install all required technologies using `npm install`
8. Run the server on http://localhost:8080/
  - `npm start`

### TODO:
- add authentication
- add pagination
- add support for dark theme
- add confirmation popup while deleting
- add bulk deletion
- add separate reducers for contact action(update, create, remove)
