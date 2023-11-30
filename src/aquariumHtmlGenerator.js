import aquariumGifAnime from "../img/aquarium.gif";
import fish from "../img/fish.gif";

const root = document.querySelector("#root");

const aquariumSection = document.createElement("section");
aquariumSection.classList.add("aquarium-section");

const aquarium = document.createElement("div");
aquarium.classList.add("aquarium");

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
aquarium.appendChild(aquariumGifDiv);
aquarium.appendChild(fishButton);
aquariumSection.appendChild(aquarium);

root.appendChild(aquariumSection);