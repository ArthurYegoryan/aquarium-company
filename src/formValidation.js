const validateForm = function(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let num = 0
    if(firstName === "" ){
        document.getElementById('first').innerText = 'FirstName is required'
        num --
    }else if(firstName.length < 3 ){
        document.getElementById('first').innerText = 'FirstName has to be longer then 3'
        num --


    }else{
        document.getElementById('first').innerText = ''
    }


    if(lastName === "" ){
        document.getElementById('last').innerText = 'LastName is required'
        num --

    }else if(lastName.length < 5 ){
        document.getElementById('last').innerText = 'LastName has to be longer then 5'
        num --

        
    }else{
        document.getElementById('last').innerText = ''
    }


    if(phone === "" ){
        document.getElementById('phoneError').innerText = 'Phone is required'
        num --
    }else if(phone.length < 9){
        document.getElementById('phoneError').innerText = 'Must contain 9 digit'
        num --
    }else{
        document.getElementById('phoneError').innerText = ''
    }



    if(email === "" ){
        document.getElementById('emailError').innerText = 'Email is required'
        num --
    }else if(!email.includes("@") || !email.includes(".") ){
        document.getElementById('emailError').innerText = 'Invalid email'
        num --
    }else{
        document.getElementById('emailError').innerText = ''
    }

    if(num === 0){
        alert("Your message has been succesfully sent")
    }
    
    return true;
}

export default validateForm;