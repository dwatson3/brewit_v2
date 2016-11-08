// production server
// set the root path to be index.html

const express = require('express')
const app = express()

const request = require('superagent')

const key = "e63ad44332232752dd66fb3afe5016a9"

app.use('/images', express.static('Images'))

app.use('/dist', express.static('dist'))

const path = require('path')

app.set('port', (process.env.PORT || 3000))

app.get('/', function(req, res) {
  res.sendFile(path.join('dist/index.html'))
})

app.get('/app.js', function(req, res) {
  res.sendFile(path.join('dist/app.js'))
})

app.get('/beers', function (req, res) {
  // eventually, we will call a function like getBreweryDb to make an API
  // request for brew info!
  console.log(req.query)
  request
    // .get(`http://api.brewerydb.com/v2/beers/oeGSxs?key=${key}`)
    .get(`http://api.brewerydb.com/v2/search?q=${req.query.name}&type=beer&key=${key}&withBreweries=Y`)
    .end((err, result) => {
      if (err) throw new Error(err)
      // issue parallel requests to /beers/<beerId>/breweries

      res.send(result)
    })
})

app.get('/breweries', function (req, res) {
  console.log(req.query)
  request
    .get(`http://api.brewerydb.com/v2/locations?postalCode=${req.query.location}&key=${key}`)
    .end((err, result) => {
      if (err) {
        console.error(err)
        console.error(result)
        // throw new Error(err)
      }

      res.send(result)
    })
})

app.listen(app.get('port'), function () {
  console.log('App is running on 3000!', app.get('port'))
})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })
