import { div } from "./contactUs.js";

const contact = document.querySelector(".contact");

contact.addEventListener("click", () => {
    console.log("Barev");
    div.classList.add("newOpen");
});