/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
var key = 'c218514f';
//var key = 'test';
var movieName = localStorage.getItem("movieName");
console.log(movieName);

var http = new XMLHttpRequest();
var url = 'http://www.omdbapi.com/?apikey=' + key + '&t=' + movieName; // vanaf + comment voor 404
http.open("GET", url); //info krijgen
http.send();
http.onreadystatechange = (e) => {
    if (http.readyState === 4 && http.status === 200) {
        setTimeout(function() {
            var data = JSON.parse(http.responseText);
            var titel = document.getElementById('titel');
            var year = document.getElementById('year');
            var actors = document.getElementById('actors');
            var poster = document.getElementById('poster');

            console.log(JSON.stringify(data));
            titel.innerHTML = data.Title;
            year.innerHTML = "Release: " + data.Year;
            actors.innerHTML = "Acteurs: " + data.Actors;
            poster.setAttribute("src", data.Poster);

            var loader = document.getElementById('loader');
            loader.classList.add('hidden');
            var button = document.getElementById('filmknop');
            button.classList.remove('hidden');
            console.log(loader);
        }, 3000
        )
    } else if(http.status === 404) {
        window.location.href = '../html/404.html';
    } else if(http.status === 401) {
        window.location.href = '../html/404.html';
    }
}


// bron:https://stackoverflow.com
