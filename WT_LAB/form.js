var nameError=document.getElementById("name-error");
var mailError=document.getElementById("mail-error");
var phoneError=document.getElementById("phone-error");
var submitError=document.getElementById("submit-error");
var form=document.getElementById("form");

function nameValidate(){
    var name=document.getElementById("form-name").value;
    if(name.length==0){
        nameError.innerHTML="Name field cant be empty";
        return false;
    }
    if(!name.match(/^[a-zA-Z]+\s[a-zA-Z]+$/)){
        nameError.innerHTML="Name is invalid";
        return false;
    }
    nameError.innerHTML="Success";
    return true;
}

function mailValidate(){
    var mail=document.getElementById("form-email").value;
    if(mail.length==0){
        mailError.innerHTML="Email field cant be empty";
        return false;
    }
    if(!mail.match(/^[a-zA-Z0-9._&+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/)){
        mailError.innerHTML="Email is invalid";
        return false;
    }
    mailError.innerHTML="Success";
    return true;
}

function phoneValidate(){
    var phone=document.getElementById("form-phone").value;
    if(phone.length==0){
        phoneError.innerHTML="Phone field cant be empty";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML="Phone is invalid";
        return false;
    }
    phoneError.innerHTML="Success";
    return true;
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    const isNameValid=nameValidate();
    const isMailValid=mailValidate();
    const isPhoneValid=phoneValidate();

    if(isNameValid && isMailValid && isPhoneValid){
        submitError.innerHTML="Form is valid and ready to submit";
        submitError.style.color="green";
    }else{
        submitError.innerHTML="Please fi the errors"
        submitError.style.color="red";
    }
});