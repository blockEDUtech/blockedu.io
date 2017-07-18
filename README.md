# BlockEDU
> Main website

## Development

Clone the repo, and install dependencies

`$ npm install`

Boot up the development server

`$ npm run dev`

# Production

To build for production

`$ npm run build`

To start the server for production ser

`$ npm run start`

# Deployment

You need to have `flightplan` installed locally

`$ npm install -g flightplan`

To deploy to the server, you'll need server access via SSH

Once that is setup, then you can run

`$ fly deploy:prod` to commit the changes to GitHub and then deploy to production. 
