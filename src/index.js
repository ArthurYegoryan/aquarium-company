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

/*** Navbar ***/
const navBar = document.createElement("div");

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

/*** Links ***/
const linksList = document.createElement("ul");

const linkLi1 = document.createElement("li");
linkLi1.classList.add("link");
const a1 = document.createElement("a");
a1.setAttribute("href", "");
a1.innerText = "Home";
linkLi1.appendChild(a1);

const linkLi2 = document.createElement("li");
linkLi2.classList.add("link");
const a2 = document.createElement("a");
a2.setAttribute("href", "");
a2.innerText = "Products";
linkLi2.appendChild(a2);

const linkLi3 = document.createElement("li");
linkLi3.classList.add("link");
const a3 = document.createElement("a");
a3.setAttribute("href", "");
a3.innerText = "About us";
linkLi3.appendChild(a3);

const linkLi4 = document.createElement("li");
linkLi4.classList.add("link");
const a4 = document.createElement("a");
a4.setAttribute("href", "");
a4.innerText = "Contact";
linkLi4.appendChild(a4);

linksList.appendChild(linkLi1);
linksList.appendChild(linkLi2);
linksList.appendChild(linkLi3);
linksList.appendChild(linkLi4);

navBar.appendChild(logo);
navBar.appendChild(groupName);
navBar.appendChild(linksList);

header.appendChild(navBar);


/*** Main ***/
const main = document.createElement("main");

/*** Company name ***/
const companyName = document.createElement("div");
companyName.classList.add("company-name");
const companyNameText = document.createElement("h1");
companyNameText.innerText = "A4 AQUARIUM";

companyName.appendChild(companyNameText);
main.appendChild(companyName);

root.appendChild(header);
root.appendChild(main);