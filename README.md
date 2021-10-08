## BULK-SMS-API 

Bulk sms allocation backend using checker and maker Access layer Control System. Application is synonymous to ebulk sms but with the exception that checker and maker integration.


# Environment SetUp

- clone repository
- Install local mongodb
- Add mongo to System environment variables path and open a new terminal
- Create Path C:/data/bulk-sms-api for windows machine
- Create Path /var/lib/mongodb/bulk-sms-api for linux machine

**Installing Dependencies**

```bash
cd /projectDirectory
yarn install
```

**Scripts**

```bash
yarn start:dev ## starts the local server in dev mode
yarn compile:tsc ## compile tyscript files to javascript
yarn doc ## generate html documentation for api
yarn test ## runs e2e and unit test together
yarn deploy ## deploys app to heroku.
yarn clean ## removes directory that are only needed for deployment
yarn build ## Generates deployment folders which will be used by heroku cli
yarn start ## starts the app in production mode.
yarn lint ## Run eslint
yarn lint:fix ## Run eslint fix
yarn prettier-format ## Runs prettier
yarn db:start:dev:win ## starts mongodb on windows machine
yarn db:start:dev:linux ## starts mongodb on linux machine
yarn start:dev:win ## Starts up mongodb, run dev server , run eslint, run tsc in watch mode, prettier in watch mode and apidoc in watch mode  on windows
yarn start:dev:linux ## Starts up mongodb, run dev server , run eslint, run tsc in watch mode, prettier in watch mode and apidoc in watch mode  on linux
yarn compile:tsc:watch ## starts typescript in watch mode
yarn prettier-watch ## starts prettier in watch mode
yarn doc:watch ## Runs api doc in watch mode

```
