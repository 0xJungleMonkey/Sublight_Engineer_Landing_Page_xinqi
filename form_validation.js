"use strict" 
// let $ = function
let submit = document.getElementById("submit");

let processValidation = function ()
{
    let emailRegex = /^\w+([.-]?\w+)*@\w+(\.-]?\w+)*(\.\w{2,3})+$/;
    let phoneRegex = /^\d{11}$/;
    let fullName = document.getElementById("FullName").value;
    let email = document.getElementById("Email").value;
    let phone = document.getElementById("phone").value;
    let language = document.getElementById("language").value;
    let isValid = true;

    if (fullName.length === 0)
    {
        alert('Field cannot be empty')
        isValid = false
    }

    if (fullName.length < 3 || fullName.length > 20)
    {
        alert('Must be between 3-20 characters')
        isValid = false
    }

    if (!email.toLowerCase().match(emailRegex))
    {
        alert('Enter valid email')
        isValid = false
    }

    if (!phone.match(phoneRegex))
    {
        alert('Enter valid phone number')
        isValid = false
    }

    if (language === "Select")
    {
        alert("Please select a language option")
        isValid = false
    }
}

submit.addEventListener("click", () =>{
    processValidation()
    alert("BOOM")
})
