const passwordButtons = document.querySelectorAll(".show-password");

passwordButtons.forEach(function(button) {
    button.addEventListener("click",function() {
        const inputId = button.getAttribute("data-input");
        const password = document.getElementById(inputId);

        if(password.type === "password"){
            password.type = "text";
            button.textContent = "Hide";
        }else{
            password.type = "password";
            button.textContent = "Show";
        }
    });
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){
        slides[currentSlide].classList.remove("active");
        dots[currentSlide].classList.remove("active");
        currentSlide = index;

        if(currentSlide >= slides.length){
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slides.length - 1;
        }

        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");

    }

    document.querySelector(".next").addEventListener("click", function(){
        showSlide(currentSlide + 1);
    });

    document.querySelector(".previous").addEventListener("click", function(){
        showSlide(currentSlide - 1);
    });

    dots.forEach(function(dot, index){
        dot.addEventListener("click", function(){
            showSlide(index);
        });
    });


const signupForm = document.getElementById("signupForm");
const successMessage = document.getElementById("successMessage");

signupForm.addEventListener("submit", function(event){
    event.preventDefault();

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";
    document.getElementById("foodError").textContent = "";
    successMessage.textContent = "";

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const food = document.getElementById("food").value;
    const terms = document.getElementById("terms");

    let isValid = true;

    if(name.length < 3){
        document.getElementById("nameError").textContent = "Please enter your full name.";
        isValid = false;
    }

    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").textContent = "Please enter your valid email.";
        isValid = false;
    }

    if(phone.replace(/\D/g, "").length < 8){
        document.getElementById("phoneError").textContent = "Please enter your valid phone number.";
        isValid = false;
    }

    if(password.length < 8){
        document.getElementById("passwordError").textContent = "Password must have at least 8 characters."
        isValid = false;
    }

    if(password !== confirmPassword || confirmPassword === ""){
        document.getElementById("confirmError").textContent = "Passwords do not match.";
        isValid = false;
    }

    if(food === ""){
        document.getElementById("foodError").textContent = "Please choose your favorite food.";
        isValid = false;
    }

    if(!terms.checked){
        isValid = false;
        alert("Please accept the Terms and Conditions.");
    }

    if(isValid === true){
        successMessage.textContent = "Congratulations! Your account form is completed successfully!";

        signupForm.reset();

        passwordButtons.forEach(function(button){
            const inputId = button.getAttribute("data-input");

            document.getElementById(inputId).type = "password";
            button.textContent = "Show";
        });
    }
});


