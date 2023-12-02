// import "./aquariumStyle.css";
// import "./aquarium.js";
// import "./style.css";
// import "./contactUs.js";
// import "./mainPageEventListeners.js";

import "./style.css";
import logoImg from "../img/logo.webp";

const root = document.getElementById('root');

/*** Header ***/

const header = document.createElement("header");

/*** Logo ***/
const logo = document.createElement("div");
logo.classList.add("logo");
const logoImage = document.createElement("img");
logoImage.setAttribute("src", logoImg);
logoImage.setAttribute("alt", "logo");
logo.appendChild(logoImage);

/*** Group name ***/
const groupName = document.createElement("div");
groupName.classList.add("group-name");
const groupNameText = document.createElement("h2");
groupNameText.innerText = "A4 GROUP";
groupName.appendChild(groupNameText);

root.append()