const signUp = document.querySelector('#signUp');
const logIn = document.querySelector('#logIn');
const home = document.querySelector('#home');
const signUpForm = document.querySelector('#signUpForm');
const logInForm = document.querySelector('#logInForm');
const logInSubmit = document.querySelector('#logInSubmit');
const signUpSubmit = document.querySelector('#signUpSubmit');
const logoWrapper = document.querySelector('#logoWrapper');
const loggedInUI = [...document.querySelectorAll(".loggedInUI")];
const loggedOutUI = [...document.querySelectorAll(".loggedOutUI")];
const error = [...document.querySelectorAll(".error")];
const logout = document.querySelector('#logout');
document.addEventListener('DOMContentLoaded', ()=>{
     loggedInUI.forEach(UI=>{
         UI.style.display = "none";
     });
});
signUp.addEventListener('click', (e)=>{
    e.preventDefault();
    signUpForm.style.display = "flex";
    logInForm.style.display = "none";
    logoWrapper.style.display = "none";

    error.forEach(er=>{
    er.style.display = 'none';
    });
});

logIn.addEventListener('click', (e)=>{
    e.preventDefault();
    signUpForm.style.display = "none";
    logInForm.style.display = "flex";
    logoWrapper.style.display = "none";
    error.forEach(er=>{
    er.style.display = 'none';
    });
});
home.addEventListener('click', (e)=>{
    e.preventDefault();
    logoWrapper.style.display = "grid";
    signUpForm.style.display = "none";
    logInForm.style.display = "none";
});

logInSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    let email = logInForm['loginEmail'].value;
    let password = logInForm['loginPass'].value;
    logInFunc(email, password);
});

signUpSubmit.addEventListener('click', (e)=>{
    e.preventDefault();
    let email = signUpForm['mail'].value;
    let password = signUpForm['pass'].value;
    let displayName = signUpForm['dName'].value;
    createUser(email, password, displayName);
});
logout.addEventListener('click', (e)=>{
    e.preventDefault();
    auth.signOut()
    .then(()=>{
        loggedInUI.forEach(UI=>{
            UI.style.display = "none";
        });
        loggedOutUI.forEach(UI=>{
            UI.style.display = "inline-block";
        });
    })
    .catch(err=>{
        console.log(err.msg)
    });
});