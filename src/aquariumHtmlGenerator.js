import aquariumForm from "../img/aquariumForm.webp";
import aquariumGifAnime from "../img/aquarium.gif";
import fish from "../img/fish.gif";

const root = document.querySelector("#root");


// Aquarium section

const aquariumSection = document.createElement("section");
aquariumSection.classList.add("aquarium-section");

const aquarium = document.createElement("div");
aquarium.classList.add("aquarium");
const aquariumBackgroundPicture = document.createElement("img");
aquariumBackgroundPicture.setAttribute("src", aquariumForm);
aquariumBackgroundPicture.setAttribute("alt", "Aquarium Form");

const aquariumGifDiv = document.createElement("div");
aquariumGifDiv.classList.add("aquarium-gif-div");
const aquariumGif = document.createElement("img");
aquariumGif.setAttribute("src", aquariumGifAnime);
aquariumGif.setAttribute("alt", "Aquarium GIF");

const fishButton = document.createElement("button");
fishButton.classList.add("fish-button");
const fishGif = document.createElement("img");
fishGif.setAttribute("src", fish);
fishGif.setAttribute("alt", "Fish GIF");

aquariumGifDiv.appendChild(aquariumGif);
fishButton.appendChild(fishGif);
aquarium.appendChild(aquariumBackgroundPicture);
aquarium.appendChild(aquariumGifDiv);
aquarium.appendChild(fishButton);
aquariumSection.appendChild(aquarium);


// Buttons section

const buttonsSection = document.createElement("section");
buttonsSection.classList.add("buttons-section");

const homePageLink = document.createElement("a");
homePageLink.setAttribute("href", "");
homePageLink.setAttribute("target", "_blank");

const homePagemButton= document.createElement("button");
homePagemButton.classList.add("home-page-button");
homePagemButton.innerText = "Home page";

homePageLink.appendChild(homePagemButton);
buttonsSection.appendChild(homePageLink);

root.appendChild(aquariumSection);
root.appendChild(buttonsSection);

export { fishButton, aquarium, fishGif, aquariumGifDiv };