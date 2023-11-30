import "./aquariumHtmlGenerator.js";
import { fishButton, aquarium } from "./aquariumHtmlGenerator.js";
import randomCoordinateGenerator from "./randomCoordinateGenerator.js";

fishButton.addEventListener("click", () => {
    console.log(aquarium.style.borferWidth);
    fishButton.style.left = `${randomCoordinateGenerator(aquarium.offsetWidth - fishButton.offsetWidth - 10)}px`; //480
    fishButton.style.bottom = `${randomCoordinateGenerator(aquarium.offsetHeight - fishButton.offsetHeight - 10)}px`; //380
})