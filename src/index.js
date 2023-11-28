import "./style.css";

const root = document.getElementById("root");

const greeting = document.createElement("h1");
greeting.innerText = "Barlus Hayer!!!";

const projectName = document.createElement("h1");
projectName.textContent = "Aquarium Company";

root.appendChild(greeting);
root.appendChild(projectName);