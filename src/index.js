import "./style.css";
import "../img/hacker.jpg";
import "../img/hacker.webp";

const root = document.getElementById("root");

const greeting = document.createElement("h1");
greeting.innerText = "Barlus Hayer!!!";

const projectName = document.createElement("h1");
projectName.textContent = "Aquarium Company";

const imageJPG = document.createElement("img");
imageJPG.setAttribute("src", "./img/hacker.jpg");
imageJPG.setAttribute("alt", "test-image-jpg");

const imageWEBP = document.createElement("img");
imageWEBP.setAttribute("src", "./img/hacker.webp");
imageWEBP.setAttribute("alt", "test-image-webp");

root.appendChild(greeting);
root.appendChild(projectName);
root.appendChild(imageJPG);
root.appendChild(imageWEBP);