/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

var button = document.getElementById("herlaad");

button.addEventListener('click', function(){ //event listener voor de knop om terug te gaan naar homepage
    window.location.href = '../html/index.html';
});
