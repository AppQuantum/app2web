function httpGetAsync(callback, apikey) {
    var url =
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${apikey}`;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(JSON.parse(xmlHttp.responseText));
    };
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}
