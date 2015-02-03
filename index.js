var scrape = require("./scrape")
var express = require("express")

var app = express()

app.set('view engine', 'ejs')

var port = process.env.PORT || 3000

app.get("/", function (req, res) {
  res.render("index")
})

app.get("/data", function (req, res) {
  scrape(function(data) {
    res.send(JSON.stringify(data))
  })
})

var server = app.listen(port, function () {
  var server_host = server.address().address
  var server_port = server.address().port

  console.log("Listening at http://%s:%s", server_host, server_port)
})
