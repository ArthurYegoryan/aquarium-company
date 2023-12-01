import fishReverse from "../img/fishReverse.gif";
import fish from "../img/fish.gif";
import "./aquariumHtmlGenerator.js";
import { fishButton, aquarium, fishGif, aquariumGifDiv } from "./aquariumHtmlGenerator.js";
import randomCoordinateGenerator from "./randomCoordinateGenerator.js";

const aquariumComputedStyle = window.getComputedStyle(aquarium);
const aquariumWidth = parseFloat(aquariumComputedStyle.width);

const fishButtonComputedStyle = window.getComputedStyle(fishButton);
const fishButtonWidth = parseFloat(fishButtonComputedStyle.width);
const fishButtonLeft = parseFloat(fishButtonComputedStyle.left);

const aquariumGifDivComputedStyle = window.getComputedStyle(aquariumGifDiv);
const aquariumGifDivWidth = parseFloat(aquariumGifDivComputedStyle.width);

const fishWidthCenter = fishButton.offsetWidth / 2;
let currentHorizontalPoint = fishWidthCenter;

const fishButtonWidthPercent = Math.ceil(fishButtonWidth * 100 / aquariumWidth);
const fishButtonLeftPercent = Math.ceil(fishButtonLeft * 100 / aquariumWidth);
const aquariumGifDivWidthPercent = Number((aquariumGifDivWidth * 100 / aquariumWidth).toFixed(1));

fishButton.addEventListener("click", () => {
    let newHorizontalPoint = randomCoordinateGenerator(fishButtonLeftPercent, Math.floor(fishButtonLeftPercent + aquariumGifDivWidthPercent - fishButtonWidthPercent));
    const newVerticalPoint = randomCoordinateGenerator(59, 80);

    if (newHorizontalPoint < fishWidthCenter) {
        newHorizontalPoint = 0;
    }

    if (newHorizontalPoint < currentHorizontalPoint) {
        fishGif.setAttribute("src", fishReverse);
    } else {
        fishGif.setAttribute("src", fish);
    }

    fishButton.style.left = `${newHorizontalPoint}%`;
    fishButton.style.bottom = `${newVerticalPoint}%`;

    currentHorizontalPoint = newHorizontalPoint;
});