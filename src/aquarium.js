import fishReverse from "../img/fishReverse.gif";
import fish from "../img/fish.gif";
import "./aquariumHtmlGenerator.js";
import { fishButton, aquarium, fishGif } from "./aquariumHtmlGenerator.js";
import randomCoordinateGenerator from "./randomCoordinateGenerator.js";

const aquariumComputedStyle = window.getComputedStyle(aquarium);
const aquariumBorderWidth = parseFloat(aquariumComputedStyle.borderWidth);
const fishButtonComputedStyle = window.getComputedStyle(fishButton);
const fishButtonMargin = parseFloat(fishButtonComputedStyle.margin);

const fishWidthCenter = fishButton.offsetWidth / 2 + aquariumBorderWidth;
let currentHorizontalPoint = fishWidthCenter;

fishButton.addEventListener("click", () => {
    let newHorizontalPoint = randomCoordinateGenerator(aquarium.offsetWidth - fishButton.offsetWidth - (aquariumBorderWidth + fishButtonMargin));
    const newVerticalPoint = randomCoordinateGenerator(aquarium.offsetHeight - fishButton.offsetHeight - (aquariumBorderWidth + fishButtonMargin));

    if (newHorizontalPoint < fishWidthCenter) {
        newHorizontalPoint = 0;
    }

    if (newHorizontalPoint < currentHorizontalPoint) {
        fishGif.setAttribute("src", fishReverse);
    } else {
        fishGif.setAttribute("src", fish);
    }

    fishButton.style.left = `${newHorizontalPoint}px`;
    fishButton.style.bottom = `${newVerticalPoint}px`;

    currentHorizontalPoint = newHorizontalPoint;
});