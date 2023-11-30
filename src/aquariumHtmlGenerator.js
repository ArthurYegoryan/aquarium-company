import aquariumGifAnime from "../img/aquarium.gif";

const root = document.querySelector("#root");

const aquariumSection = document.createElement("section");
aquariumSection.classList.add("aquarium-section");

const aquarium = document.createElement("div");
aquarium.classList.add("aquarium");

const aquariumGif = document.createElement("img");
aquariumGif.setAttribute("src", aquariumGifAnime);
aquariumGif.setAttribute("alt", "Aquarium GIF");

aquarium.appendChild(aquariumGif);
aquariumSection.appendChild(aquarium);

root.appendChild(aquariumSection);