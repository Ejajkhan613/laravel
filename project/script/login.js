// Form Submission Functionality

let data = JSON.parse(localStorage.getItem("data")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", function (el) {
    el.preventDefault();

    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let flag = "false";
    for (let a = 0; a < data.length; a++) {
        if (data[a].email == email.value && data[a].password == password.value) {

            flag = "yes";
            break;
        }
    }

    if (flag == "yes") {
        let div = document.createElement("div");
        div.style.backgroundColor = "rgb(11, 199, 199)";
        div.style.width = "fit-content";
        div.style.height = "fit-content";
        div.style.padding = "10px 30px";
        div.style.margin = "auto"


        let h2 = document.createElement("h2");
        h2.innerText = "Login Succesfull";
        h2.style.color = "white";
        h2.style.fontSize = "16px";
        h2.style.margin = "0px 0px"

        div.append(h2);
        document.querySelector("#popup").append(div);
        document.querySelector("form").reset();

        function showPopup() {
            document.querySelector("#popup").innerHTML = "";
            window.location.href = "/project/main.html";
        }

        setTimeout(showPopup, 2000);
    } else {
        let div = document.createElement("div");
        div.style.backgroundColor = "red";
        div.style.width = "fit-content";
        div.style.height = "fit-content";
        div.style.padding = "10px 30px";
        div.style.margin = "auto"


        let h2 = document.createElement("h2");
        h2.innerText = "Your Email and password is Incorrect";
        h2.style.color = "white";
        h2.style.fontSize = "16px";
        h2.style.margin = "0px 0px"

        div.append(h2);
        document.querySelector("#popup").append(div);

        function showPopup() {
            document.querySelector("#popup").innerHTML = "";
        }

        setTimeout(showPopup, 2000);
    }
})




// Show Password Functionality

let showPass = document.querySelector("#showPass");
showPass.addEventListener("click", function () {
    let password = document.querySelector("#password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})





// Function for Submit button to Change Color or the Button

function check() {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let submit = document.querySelector("#submit");
    if (email.value !== "" && password.value.length > 5) {
        submit.style.backgroundColor = "#FF7A59";
        submit.style.color = "white";
    } else {
        submit.style.backgroundColor = "#EAF0F6";
        submit.style.color = "#B0C1D4";
    }
}

setInterval(check, 1500);



