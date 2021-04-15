var Airtable = require("airtable");

var base = new Airtable({ apiKey: "key36DMlmYm8Ica1w" }).base(
  "app9KVIIXz2W9yVTK"
);
 
base("art").select({
	view: "Date"
}).eachPage(gotPageOfArt, gotAllArt);

var art = [];

function gotPageOfArt(records, fetchNextPage){
console.log("gotPageOfArt()");
art.push(...records);
fetchNextPage();
}

function gotAllArt(err){
console.log("gotAllArt()");

if (err) {
	console.log("error loading art");
	console.error(err);
	return;
}

consoleLogArt();
showArt();
}

function consoleLogArt() {
	console.log("consoleLogArt()");
	art.forEach((art) => {
		console.log("Art:", art);
	});
}

function showArt() {
	console.log("showArt()");
	art.forEach((art) => {

	// div classes for images and text
		let artContainer = document.createElement("div");
		artContainer.classList.add("art-container");
		document.querySelector(".grid").append(artContainer);

	// airtable info
		let artImage = document.createElement("img");
		artImage.classList.add("art-image");
		artImage.src = art.fields.image[0].url;
		artContainer.append(artImage);
	
		let artTitle = document.createElement("h2");
		artTitle.classList.add("art-title");
		artTitle.innerText = art.fields.title;
		artContainer.append(artTitle);

		let artArtist = document.createElement("h3");
		artArtist.classList.add("art-artist");
		artArtist.innerText = art.fields.artist;
		artContainer.append(artArtist);

		let artYear = document.createElement("p");
		artYear.classList.add("art-year");
		artYear.innerText = art.fields.year;
		artContainer.append(artYear);

	// toggle
		artContainer.addEventListener("click", function() {
			artTitle.classList.toggle("active");
			artArtist.classList.toggle("active");
			artYear.classList.toggle("active");
		})

	// filter options
		var artMedium = art.fields.medium;
		artMedium.forEach(function(medium) {
			artContainer.classList.add(medium)
		})

		var filterSculpture = document.querySelector('.sculpture');
		filterSculpture.addEventListener("click", function() {

			if (artContainer.classList.contains("sculpture")) {
				artContainer.style.display = "block"
			} else {
				artContainer.style.display = "none"
			}
		})

		var filterPainting = document.querySelector('.painting');
		filterPainting.addEventListener("click", function() {

			if (artContainer.classList.contains("painting")) {
				artContainer.style.display = "block"
			} else {
				artContainer.style.display = "none"
			}
		})

		var filterPhotography = document.querySelector('.photography');
		filterPhotography.addEventListener("click", function() {

			if (artContainer.classList.contains("photography")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterPrint = document.querySelector('.print');
		filterPrint.addEventListener("click", function() {

			if (artContainer.classList.contains("print")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterMixed_Media = document.querySelector('.mixed_media');
		filterMixed_Media.addEventListener("click", function() {

			if (artContainer.classList.contains("mixed_media")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterDrawing = document.querySelector('.drawing');
		filterDrawing.addEventListener("click", function() {

			if (artContainer.classList.contains("drawing")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterFilm = document.querySelector('.film');
		filterFilm.addEventListener("click", function() {

			if (artContainer.classList.contains("film")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterTextile = document.querySelector('.textile');
		filterTextile.addEventListener("click", function() {

			if (artContainer.classList.contains("textile")) {
				artContainer.style.display = "block";
			} else {
				artContainer.style.display = "none";
			}
		})

		var filterReset = document.querySelector('.js-reset')
		filterReset.addEventListener("click", function(){
				artContainer.style.display = "block";
		})
	});
};
