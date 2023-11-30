const root = document.getElementById("root")
const button = document.createElement("li")
const div = document.createElement("div")
const closeButton = document.createElement("button")
const h2 = document.createElement("h2")
const mail = document.createElement("p")
const call = document.createElement("span")
let imgPaths = ["src/img/message.png","src/img/call.png","src/img/location.png" ]
let text = ["bestTeam@gmail.com", "+37499123456", "Hakob Hakobyan 2,Mergelyan Institute"]
const form = document.createElement("form")
const divForm = document.createElement("div")
const divForm1 = document.createElement("div")
const divForm2 = document.createElement("div")
const firstNameInput = document.createElement("input")
const lastNameInput = document.createElement("input")
const phone = document.createElement("input")
const email = document.createElement("input")
const textArea = document.createElement("textarea")
const submit = document.createElement("button")


button.classList.add("openButton")
div.classList.add("openDiv")
closeButton.classList.add("close")
form.classList.add("form")
textArea.classList.add("textArea")
divForm.classList.add("divForm")
divForm2.classList.add("divForm2")
firstNameInput.classList.add("input")
lastNameInput.classList.add("input")
phone.classList.add("input")
email.classList.add("input")
textArea.classList.add("input")
submit.classList.add("submit")


firstNameInput.type = "text"
lastNameInput.type = "text"
phone.type = "text"
email.type = "email"


firstNameInput.placeholder = "First Name"
lastNameInput.placeholder = "Last Name"
phone.placeholder = "Phone number"
email.placeholder = "Email address"
textArea.placeholder = "Message"

button.innerHTML = "Contact"
closeButton.innerHTML = "Close"
h2.innerHTML = "Get in touch with us"
submit.innerHTML = "Submit"

div.appendChild(closeButton)
div.appendChild(h2)
div.appendChild(form);
form.appendChild(divForm)
divForm.appendChild(divForm1)
divForm.appendChild(divForm2)
divForm1.appendChild(firstNameInput)
divForm1.appendChild(phone)
divForm2.appendChild(lastNameInput)
divForm2.appendChild(email)
form.appendChild(textArea)
form.appendChild(submit)
root.appendChild(button)
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


button.addEventListener("click",()=>{
    div.classList.add("newOpen")
})
closeButton.addEventListener("click",()=>{
    div.classList.remove("newOpen")
})