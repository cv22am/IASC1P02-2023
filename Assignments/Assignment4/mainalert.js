function showPopUp() {
    var cookie = $.cookie('the_cookie');
    if(!cookie){
        alert(" Please view this in Firefox");
        $.cookie('the_cookie', 'the_value');
    }
}
showPopUp();
