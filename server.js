var express = require('express')
var app = express()

app.get('/query', function (req, res) {
  // eventually, we will call a function like getBreweryDb to make an API
  // request for brew info!
  res.send('your response')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
