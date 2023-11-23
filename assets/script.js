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

let nbrSlides = slides.length - 1

let srcImg = "./assets/images/slideshow/"

let imageSlide = document.getElementById("banner-img")
let text = document.querySelector("#banner p")
let dots = document.querySelector(".dots");

let indexSlide = 0;

function creationDot() {
	slides.forEach(() => {
		let dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
	});
}

function majDots() {
	// j'utilise en deuxieme argument 'indexDot' pour obtenir l'index de mon élément dot
	document.querySelectorAll('.dot').forEach((dot, indexDot) => {
		// je vérifie si mon index dot correspond à l'index du slid, si c'est le cas je rajoute au dot la classe dot_selected
		if (indexDot === indexSlide) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

function utilisationFleche() {
	//Utilisation d'une fonction simple pour la flèche gauche avec déclaration de variable
	let flecheGauche = document.querySelector(".arrow_left")
	flecheGauche.addEventListener("click", auClicGauche)
	function auClicGauche() {
		indexSlide--
		if (indexSlide < 0) indexSlide = nbrSlides;
		console.log("test fleche gauche")
		text.innerHTML = slides[indexSlide]["tagLine"]
		console.log(slides[indexSlide]["image"])
		imageSlide.setAttribute("src", srcImg + slides[indexSlide]["image"])
		majDots()
	}

	//Utilisation d'une fonction fléchée anonyme avec le EventListener pour la flèche droite
	let flecheDroite = document.querySelector(".arrow_right")
	flecheDroite.addEventListener("click", auCliqueDroit)
	function auCliqueDroit() {
		// j'incrémente mon index suite au clic pour me position dans le tableau des slides
		indexSlide++
		//Je vérifie si la valeur de mon index n'a pas dépassée le nbr de slides
		if (indexSlide > nbrSlides) indexSlide = 0
		console.log("test fleche droite")
		// je définie la nouveau contenu de ma variable text en y inserant la tagline de l'index correspondant
		text.innerHTML = slides[indexSlide]["tagLine"]
		console.log(slides[indexSlide]["image"])
		imageSlide.setAttribute("src", srcImg + slides[indexSlide]["image"])
		majDots()
	}
}




function lancerDiapo() {
	creationDot()
	majDots()
	utilisationFleche()
}

lancerDiapo()

