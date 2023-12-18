function changeVisOff() {
  document.getElementById("back-img1").style.visibility = "hidden";
}

function changeVisOn() {
  document.getElementById("back-img1").style.visibility = "visible";
}


function updateClock() {
    const jstTime = new Date().toLocaleString('nl-NL', {timeZone: 'Asia/Tokyo'});
    const cetTime = new Date().toLocaleString('nl-NL', {timeZone: 'Europe/Berlin'});
    const estTime = new Date().toLocaleString('nl-NL', {timeZone: 'America/New_York'});

    document.getElementById('jst').innerHTML = jstTime;
    document.getElementById('cet').innerHTML = cetTime;
    document.getElementById('est').innerHTML = estTime;
}

setInterval(updateClock, 1000);
