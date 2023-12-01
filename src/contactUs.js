import validateForm from "./formValidation.js";
import "./contactStyle.css";

const root = document.getElementById("root")

// const button = document.createElement("button")
// button.classList.add("openButton")
// button.innerHTML = "Contact"

const div = document.createElement("div")
div.classList.add("openDiv")

const closeButton = document.createElement("button")
closeButton.classList.add("close")
closeButton.innerHTML = "Close"

const h2 = document.createElement("h2")
h2.innerHTML = "Get in touch with us"

let imgPaths = ["src/img/message.png","src/img/call.png","src/img/location.png" ]
let text = ["bestTeam@gmail.com", "+37499123456", "Hakob Hakobyan 2,Mergelyan Institute"]

const form = document.createElement("form");
form.classList.add("form")

const firstNameInput = document.createElement("input")
firstNameInput.type = "text"
firstNameInput.classList.add("input")
firstNameInput.id = "firstName"
firstNameInput.placeholder = "First Name"

const firstNameError = document.createElement("span")
firstNameError.classList.add("error")
firstNameError.id = "first"

const lastNameInput = document.createElement("input")
lastNameInput.type = "text"
lastNameInput.id = "lastName"
lastNameInput.classList.add("input")
lastNameInput.placeholder = "Last Name"

const lastNameError = document.createElement("span")
lastNameError.classList.add("error")
lastNameError.id = "last"

const phone = document.createElement("input")
phone.type = "text"
phone.id = "phone"
phone.classList.add("input")
phone.placeholder = "Phone number"

const phoneError = document.createElement("span")
phoneError.classList.add("error")
phoneError.id = "phoneError"

const email = document.createElement("input")
email.classList.add("input")
email.id = "email"
email.type = "email"
email.placeholder = "Email address"

const emailError = document.createElement("span")
emailError.classList.add("error")
emailError.id = "emailError"

const textArea = document.createElement("textarea")
textArea.classList.add("input")
textArea.classList.add("textArea")
textArea.placeholder = "Message"

const submit = document.createElement("button")
submit.classList.add("submit")
submit.innerHTML = "Submit"

const divForm = document.createElement("div")
divForm.classList.add("divForm")

const divForm1 = document.createElement("div")

const divForm2 = document.createElement("div")
divForm2.classList.add("divForm2")

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    validateForm()
})
// button.addEventListener("click",()=>{
//     div.classList.add("newOpen")
// })
// closeButton.addEventListener("click",()=>{
//     div.classList.remove("newOpen")
// })

div.appendChild(closeButton)
div.appendChild(h2)
div.appendChild(form);
div.appendChild(document.createElement("br"))
div.appendChild(document.createElement("br"))
form.appendChild(divForm)
divForm.appendChild(divForm1)
divForm.appendChild(divForm2)
divForm1.appendChild(firstNameInput)
divForm1.appendChild(firstNameError)
divForm1.appendChild(phone)
divForm1.appendChild(phoneError)
divForm2.appendChild(lastNameInput)
divForm2.appendChild(lastNameError)
divForm2.appendChild(email)
divForm2.appendChild(emailError)
form.appendChild(textArea)
form.appendChild(submit)
div.appendChild(document.createElement("br"))
// root.appendChild(button)
root.appendChild(div)



for(let i = 0; i< imgPaths.length;i++){

    let imgEl = document.createElement("img")
    let pEl = document.createElement("span")
    
    imgEl.src = imgPaths[i]
    pEl.innerHTML = text[i]


    imgEl.classList.add("img")
    pEl.classList.add("span")
    
    div.appendChild(imgEl)
    div.appendChild(pEl)
    div.appendChild(document.createElement("br"))
    div.appendChild(document.createElement("br"))
}