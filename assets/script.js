const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


/** Initialisation des variables **/
let numeroIdSlide = 0;

const textBanner =  document.querySelector ('main div p');




//  Creation dynamique des balises <p>  bullets

function createBullets(){
	for(let nbeBullets = 1; nbeBullets <= slides.length; nbeBullets++ ){
		let bulletText =" ";
		let createParagraph = document.createElement("p");
		createParagraph.innerText = bulletText;
		let destinationParagraphCree = document.getElementById('addBullets');
		destinationParagraphCree.appendChild(createParagraph);
}
}

createBullets();


// Application classe css "dot" sur balises <p> créées pour faire apparaitre les points dans le slider

let styleBullets = document.querySelectorAll(".dots p");
styleBullets.forEach((styleBullet) => {
styleBullet.classList.add("dot");
}); 

// Sélection de tous les bullets pour preparer l'appilcation du style css dot actif
let banner = document.getElementById('banner');
let selectDots = banner.querySelectorAll('.dot'); 

// Initialisation du bullet sélectionné 
selectDots[0].classList.add("dot_selected");


// Changement éléments du  slider  Img - texte - style bouton 

function changeSlider(direction){
	selectDots[numeroIdSlide].classList.remove("dot_selected");

	numeroIdSlide = numeroIdSlide + direction;
	if (numeroIdSlide > slides.length-1)
		numeroIdSlide =  0;
	if (numeroIdSlide<0)
		numeroIdSlide = slides.length-1;
	
	document.getElementById=(imageSlides).src = "./assets/images/slideshow/" + slides[numeroIdSlide].image;
	document.getElementById=("tagLineSlides").innerHTML  =  slides[numeroIdSlide].tagLine;
	textBanner.innerHTML = slides[numeroIdSlide].tagLine;
	
	selectDots[numeroIdSlide].classList.add("dot_selected");

}

