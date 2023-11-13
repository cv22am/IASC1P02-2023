var age = prompt("How old are you?", "")

var date = new Date()

var bday = date.getFullYear() - age

document.getElementById("AgeText").innerHTML=bday;
