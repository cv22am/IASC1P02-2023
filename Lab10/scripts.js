function outputAdd() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  x = parseFloat(x);
  y = parseFloat(y);
  var    results = x + y;
  document.getElementById("outputText").innerHTML=results;
}

function outputSub() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  x = parseFloat(x);
  y = parseFloat(y);
  var    results = x - y;
  document.getElementById("outputText").innerHTML=results;
}

function outputMult() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  x = parseFloat(x);
  y = parseFloat(y);
  var    results = x * y;
  document.getElementById("outputText").innerHTML=results;
}

function outputDivide() {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  x = parseFloat(x);
  y = parseFloat(y);
  var    results = x / y;
  document.getElementById("outputText").innerHTML=results;
}
