function outputResults() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  x = parseFloat(x);
  y = parseFloat(y);
  var    results = x + y;
  document.getElementById("outputText").innerHTML=results;
}
