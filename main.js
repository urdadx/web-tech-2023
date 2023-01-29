const form = document.querySelector("#form")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const message_alert = document.querySelector(".alert")

// normal valid email pattern
const EMAIL_REGEX = /^[\w\d-]+(?:\.[\w\d-]+)*@[\w\d]+\.[\w]{1,10}$/gm

// one special character, one uppercase, one lowercase, one number, length 7-16
const PASSWORD_REGEX = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,16})\S$/


form.addEventListener("submit", (e) => {

    // prevents automatic page reload
    e.preventDefault()

    // check if input fields are empty
    if(email.value === "" || password.value === "" || 
       email.value === null || password.value === null)
    {
        message_alert.classList.add("visible")
        password.classList.add("error")
    }

    // check email matching
    if(EMAIL_REGEX.test(email.value)){
        email.classList.add("success")
    }    

    else{
        email.classList.add("error")
    }

    // check password matching
    if(PASSWORD_REGEX.test(password.value)){
        password.classList.add("success")
    }    
    else{
        password.classList.add("error")
    }

    // clear the form after ~ 2.4 seconds so USER can test the app easily
    window.setTimeout(() => {
        alert("Do you want to clear the form?");
        window.location.reload()
    }, 2400)

})








