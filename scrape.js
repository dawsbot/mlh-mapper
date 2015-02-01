var url = "https://mlh.io/seasons/s2015/events"

var scrape = function(fn) {
  $.get(url, function() {
    var events = []

    $(".event-wrapper" ).each(function(index) {
      var event = {}

      event.name = $(this).find("h3").text()
      event.date = $(this).find("p").first().text()
      event.location = $(this).find("p").last().text()

      events.push(event)
    })

    fn(events)
  })
}
