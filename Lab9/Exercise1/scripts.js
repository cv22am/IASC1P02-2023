var start = new Date()

function stopTime() {
  var stop = new Date()
  var time =  stop.getTime() - start.getTime()
  var time = time/1000
  alert("You have been on the page for " + time + " seconds");

}
