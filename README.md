# brewit_v2
A craft beer and brewery finder app.

This is my second version of Brew It, a craft beer and brewery finder app.

This app was inspired due to my curiosity on finding good craft beers, and trying new craft beers while traveling to new places and cities.

With Brew It, there are two search fields.

The first search field allows you to search for your beer of choice, with the beer description information as well as which breweries carry them.

The second search field allows you to find breweries from your current location, so inputting your local address or cross streets will give local breweries near you.

You can also simply type in your brewery of choice, and find out the location, beers available, hours of operation, and contact information.

This app uses one APIs: the breweryDB API.

This app is built with React.JS, Express.JS, Sass, and webpack.

## Developing locally

To run the application locally, simply run the following command:

```
$ npm run dev
```

This will compile your changes and create a server at `http://localhost:3000`

## Deploying

To deploy, run the command:

```
$ npm run build
```

This will compile your application for use in production. Commit the changes and push them up, then push to the Heroku remote!

In production, the application starts using the `npm start` command, which runs `production.js`