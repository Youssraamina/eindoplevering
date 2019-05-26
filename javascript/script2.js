/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
var key = 'c218514f';
//var key = 'test';
var movieName = localStorage.getItem("movieName");
console.log(movieName);

var laadTekst = document.getElementById('indicator');
laadTekst.innerHTML = 'De film ' + movieName + ' is aan het laden.';

var http = new XMLHttpRequest();
var url = 'http://www.omdbapi.com/?apikey=' + key + '&t=' + movieName; // vanaf + comment voor 404
http.open("GET", url); //info krijgen
http.send(); //verstuur de request naar de api
http.onreadystatechange = (e) => {
    if (http.readyState === 4 && http.status === 200) { //als er een succesvol antwoord wordt terug gestuurd dan wordt de info ingeladen
        setTimeout(function() { //zet een timeout zodat het laden ook te zien is
            var data = JSON.parse(http.responseText); //de response omzetten naar json
            var titel = document.getElementById('titel');
            var year = document.getElementById('year');
            var actors = document.getElementById('actors');
            var poster = document.getElementById('poster');

            console.log(JSON.stringify(data));
            titel.innerHTML = data.Title; //pak titel uit de json
            year.innerHTML = "Release: " + data.Year; //pak jaar uit json
            actors.innerHTML = "Acteurs: " + data.Actors; //pak acteurs uit json
            poster.setAttribute("src", data.Poster); //pak foto uit json en geef deze weer

            var loader = document.getElementById('loader');
            loader.classList.add('hidden'); //laat de lader verdwijnen
            laadTekst.classList.add('hidden'); //laat de laadtekst verdwijnen

            var button = document.getElementById('filmknop');
            button.classList.remove('hidden'); //laat de knop zien
            console.log(loader);
        }, 3000 //3 seconden
        )
    } else if(http.status === 404) { //bij een 404 code, laat de 404 pagina zien
        window.location.href = '../html/404.html';
    } else if(http.status === 401) { //zelfde bij een 401 code
        window.location.href = '../html/404.html';
    }
}



// bron:https://stackoverflow.com
