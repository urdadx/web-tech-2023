// CV fields
const user_name = document.querySelector(".user-name");
const email = document.querySelector(".user-email");
const phone = document.querySelector(".user-phone");
const bio = document.querySelector(".user_bio");


// Form Inputs
const formName = document.querySelector(".form-username");
const formEmail = document.querySelector(".form-email");
const formPhone = document.querySelector(".form-phone");
const formBio = document.querySelector(".form-bio");



const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // change the CV values
    user_name.innerHTML = formName.value;
    email.innerHTML = formEmail.value;
    phone.innerHTML = formPhone.value;
    bio.innerHTML = formBio.value;

})