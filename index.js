var scrape = require("./scrape")
var express = require("express")

var app = express()

app.set('view engine', 'ejs')

app.get("/", function (req, res) {
  res.render("index")
})

app.get("/data", function (req, res) {
  scrape(function(data) {
    res.send(JSON.stringify(data))
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var post = server.address().port

  console.log("Listening at http://%s:%s", host, post)
})
