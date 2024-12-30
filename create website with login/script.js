// const formOpenBtn = document.querySelector("#form_open"),
// home = document.querySelector(".home"),
// formContainer = document.querySelector(".form_container"),
// formClose = document.querySelector(".form_close"),
// signupBtn = document.querySelector("#signup"),
// loginBtn = document.querySelector("#signup"),
// pwShowHide = document.querySelector(".pw_hide");

// formOpenBtn.addEventListener("click", () => home.classList.add("show"));
// formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// pwShowHide.forEach((icon) => {
//    icon.addEventListener("click", () => {
//     let getpwInput = icon.parentElement.querySelector("input");
//     if(getpwInput.type === "password") {
//         getpwInput.type = "text";
//         icon.classList.replace("uil-eye-slash", "uil-eye")
//     }else{
//         getpwInput.type = "password";
//         icon.classList.replace("uil-eye", "uil-eye-slash")
//     }
//    });
// });
// signupBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
//     formContainer.classList.add("active");
// });
// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     formContainer.classList.remove("active");
// })

const formOpenBtn = document.querySelector("#form_open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formClose = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formClose.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getpwInput = icon.parentElement.querySelector("input");
        if (getpwInput.type === "password") {
            getpwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getpwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});
