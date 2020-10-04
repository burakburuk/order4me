# README

Order4me Server

Web application used by Order4me UI.

## Dependencies and dev-dependencies

-   Yarn for development environment and package management.
-   Nodejs
-   Express
-   Compression -> compress response bodies for all request that traverse through the middleware
-   Helmet -> security middleware including (xssFilter, contentSecurityPolicy, contentSecurityPolicy etc)
-   Winston -> logging library
-   Webpack -> build management
-   Babel -> transpiling to ES5

## Run application in development mode

Start application in development mode: From the "server" folder run following command. Then it will automatically start the project from 8000 port. It will also start listening changes in the code and reload changed files on save.

`yarn start`

## Build application for production

Production build: From the "server" folder run following command. Then it will create folder named "build" which includes necessary files.

`yarn build`
