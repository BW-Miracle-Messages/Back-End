## SET UP ENVIRONMENT
[x] yarn init (set up files)
[x] yarn install (node modules)
[x] yarn add express, helmet, morgan 
[x] yarn add nodemon --dev (for deployment)
[x] yarn add dotenv
[x] yarn add knex sqlite3
[x] yarn add bcryptjs
[x] add script: 
 "scripts": {
    "server": "nodemon index.js", (auto updates server)
    "start": "node index.js"
  },
[] install yarn add express-session
[] yarn add connect-session-knex
[x] yarn add cors (to connect to react app)
[x] yarn add jsonwebtoken
[x] npx gitignore node (to create a gitignore file)

## ORGANIZATION
[x] server file 
[x] index file 
[x] routes folder
    [x] routes files
    [x] models
[x] migrations
[x] knex file
[x] seeds files 
[x] data folder
[x] dbConfig file 

## CREATING REACT APP IS SAME FOLDER
[] yarn install (outside of app for node modules, optional)
[] yarn create react-app name
    [] cd into react folder
    [] yarn start 
[] cd into folder 
[] yarn add react-router-dom
[] update index.js by importing router and wrapping app in router 
[] yarn add axios 
[] Write Login component
[] Add NavLink and Route for Login in App.js
[]MAKE SURE YOU ARR USING A REGISTERED USER & THAT YOU LOGGED IN WITH REGISTERED USER ON POSTMAN
[] to check for token...click application and when you click login you should see a token on your localStorage 
[] create HOC so client can make requests to backend 

##MIGRATIONS (way to recreate your database to particular point in time)

- `npx knex` or  shows command list 
[x] run `npx  knex init` or ``yarn knex init ` to generate `knexfile.js`
[x] modify `knexfile.js` to config our db connections
[x] remove staging and production configs from `knexfile.js`
[x] run `npx knex migrate:make create_name_of_table` 
[x] make a migration for each db schema change 
[x] run `npx knex migrate:latest` to update changes made to table 
[x] SAVE FILES AND CHECK YOUR SERVER
[x] need to create a migration for every changes made, i.e. adding email or creating another table, etc
[x]`npx knex migrate:rollback` deletes last migration added 


##TO SEED

[x] `npx knex seed:make name of table 
[x] can add numbers to order seeds
[x] `npx knex seed: run`


[] add to package.json: (for the env file)
 "jest": {
    "testEnvironment": "node"
  }
[] yarn start server 
[x] need cross env for testing for node (installed already)
[] create .env file:
[] add  to package.json
“Jest”; {
“devEnvironment”: node, 
}

OR 

Jest —init
	- override: yes
	- can be: no or yes 
	-testing environment: node
	- Coverage reports: yes
	- auto clear mock calls: no

^^^ takes the jest key out of the package.json and goes to jest  config file 

[]  knex migrate:latest --env=testing (how you pass migrations and seeds in diff environment, not always necessary to run) NEEDED FOR TESTING DB FOLDER 
    - creates test database 
    - can add --env=testing to seed command to create testing seeds 

[x] yarn add supertest — dev
[x] yarn add @testing-library/jest-dom -D
[x] yarn add cross-env and add to scripts 