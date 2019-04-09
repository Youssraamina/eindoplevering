/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var opslaan = document.getElementsByName('opslaan'); // Pakt vanuit de HTML alle opslaan knoppen door te zoeken naar de class 'opslaan'
var verrasbutton = document.getElementsByName('verras'); // Pak vanuit de HTML de verras <button>
console.log(opslaan);// Laat de opslaan knoppen zien


var genres = ["Horror", "Actie", "Drama", "Roman", "Cartoon"];//Array met genres
console.log(genres.length);//Print de lengte van de genres array


function getRandomInt(min, max) {
    min = Math.ceil(min); // Rond af op dichtsbij zijnde getal
    max = Math.floor(max); // Rond af naar beneden
    return Math.floor(Math.random() * (max - min)) + min;
} //https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

var verrasmij = document.createElement('H1');// Maak een nieuwe html element <h1>
document.body.appendChild(verrasmij); // Geeft een nieuwe kind aan de body en het kind is dus de h1 van hierboven

console.log(verrasmij); //Print de h1


verrasbutton.forEach(function (button) {
    button.addEventListener('click', function () {
        verrasmij.innerHTML = genres[getRandomInt(0, 5)];//Zet de tekst van de <h1> verrasmij element, met een random genre
        document.body.appendChild(verrasmij);//Zet de <h1> helemaal onderaan de body
    });//Luistert naar een click van de gebruiker
});
var i;//Deze variabel wordt gebruikt om te tellen bij de for loop
var src = ["../images/ffilm.png", "../images/film1.png", "../images/film%202.png", "../images/film3.png", "../images/film4.png", "../images/film5.png"];//Deze array bestaat uit alle film thumbnails
var movieNames = ["bright","mowgli", "polar","close","black history","braqueurs"];

//Uitgelegd door Murathan Karacaer HBO-ICT Software Engineering

function maakarticle(id) {
    var article = document.createElement('article');//Maakt de <article> element
    var img = document.createElement('img');//Maakt de <img> element
    var button = document.createElement('button');//Maakt de <button> element
    var icoon = document.createElement('i');//Maakt de <i> element
    var idtekst = "foto" + id;// Deze variabele is de ID tekst van elke thumbnail

    img.setAttribute("id", idtekst);//Hier zet je de id van de <img> element met de tekst idtekst
    img.setAttribute("src", src[id]);//Hier zet je de src van de <img> element met de link vanuit de array

    button.setAttribute("name", "opslaan");//Hier zet je de name van de <button> element
    icoon.setAttribute("class", 'far fa-bookmark');//Hier zet je de class van de <i> element

    article.setAttribute("name", movieNames[id]);

    article.addEventListener('click', function () {
        localStorage.setItem("movieName", movieNames[id]);
           window.location.href = '../html/mijnlijst.html';

    })

    article.addEventListener('mouseover', function () {
        article.classList.add('hover');
    })

    article.addEventListener('mouseout', function () {
        article.classList.remove('hover');
    })

    var section = document.getElementById('thumbnails1');//Hier pak je de trending section
    button.appendChild(icoon);//De <button> element krijgt hier een KIND. Het kind is de <i> element
    article.appendChild(img);//De <article> element krijgt hier een KIND. Het kind is de <img> element
    article.appendChild(button);//De <article> element krijgt hier een KIND. Het kind is de <button> element
    section.appendChild(article);//De <section> element krijgt hier een KIND. Het kind is de <article> element
}//Deze functie maakt de thumbnails van het kopje trending

for (i = 0; i < src.length; i++) {
    maakarticle(i);//Hier roep je de functie aan genaamd maakarticle()
}//Deze for loop maakt de thumbnails van de trending section aan op basis van de src array

// Geleerd tijdens de lessen van Project web
opslaan.forEach(function (button) {
    button.addEventListener('click', function () { // loopt door nodelist

        if (button.firstChild.className.includes('far fa-bookmark')) {
            button.firstChild.className = 'fas fa-bookmark'; // als eerste kind van button FAR fa bookmark heet verandert hij in FAS fa bookmark.
        } else if (button.firstChild.className.includes('fas fa-bookmark')) {
            button.firstChild.className = 'far fa-bookmark'; // maar als eerste kind van button FAS fa bookmark heet dan verandert hij in FAR fa bookmark
        } else {
            console.log('Er gaat iets fout'); // zo niet, dan wordt de gebruiker via de console gewaarschuwd
        }
    });
});



// Youssra Chait 500779482 - ffd 2019 video platform.
