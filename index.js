const webpack = require('webpack')
const express = require('express')
const app = express()
const webpackDevMiddleware = require('webpack-dev-middleware')
const request = require('superagent')
const key = require('./config.json').api_secret_key

const api = require('./server/api')

const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, { stats: { colors: true } }))
// app.use('/api', api)

app.post('/query', function (req, res) {
  // eventually, we will call a function like getBreweryDb to make an API
  // request for brew info!
  console.log(req.query)
  request
    // .get(`http://api.brewerydb.com/v2/beers/oeGSxs?key=${key}`)
    .get(`http://api.brewerydb.com/v2/search?q=${req.query.name}&type=beer&key=${key}`)
    .end((err, result) => {
      if (err) throw new Error(err)

      res.send(result)
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
