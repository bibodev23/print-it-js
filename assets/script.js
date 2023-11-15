const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let slider = document.getElementById("banner");
slider.setAttribute("class", "test")

let image = document.getElementById("banner-img")
let text = document.querySelector("#banner p")

let i = 0
let flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", auClicGauche)
function auClicGauche() {
	console.log("test fleche gauche")
}

let flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", auClicDroit)
function auClicDroit() {
	alert("test fleche droite")
	console.log(slides[i]["tagLine"])
	console.log(slides[i]["image"])
	i++
	if (i >= slides.length)
		return i = 0
}