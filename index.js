var scrape = require("./scrape")

scrape(function(data) {
  console.log(JSON.stringify(data))
})
