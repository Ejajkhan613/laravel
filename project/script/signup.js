// Submit color change Functionality

function check() {
    let firstName = document.querySelector("#FirstName");
    let LastName = document.querySelector("#LastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let submit = document.querySelector("#submit");
    if (firstName.value !== "" && LastName.value !== "" && email.value !== "" && password.value.length > 5) {
        submit.style.backgroundColor = "#FF7A59";
        submit.style.color = "white";
    } else {
        submit.style.backgroundColor = "#EAF0F6";
        submit.style.color = "rgb(155, 148, 148)";
    }
}

setInterval(check, 1500);


// Logo click Index page Functionality
let logo = document.querySelector("#logo > img");
logo.addEventListener("click", function () {
    window.location.href = "/project/index.html";
})



// Form Submit Functionality
let storeData = JSON.parse(localStorage.getItem("data")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", function (el) {
    el.preventDefault();

    let firstName = document.querySelector("#FirstName");
    let LastName = document.querySelector("#LastName");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");


    // If Inputs are empty Alerting the User
    if (firstName.value == "" || LastName.value == "" || email.value == "" || password.value == "") {
        let div = document.createElement("div");
            div.style.backgroundColor = "red";
            let h2 = document.createElement("h2");
            h2.innerText = "Please fill all the Details";
            h2.style.color = "white";
            div.style.width = "fit-content";
            div.style.height = "fit-content";
            div.style.padding = "10px 30px";
            div.style.margin = "auto"
            h2.style.fontSize = "16px";
            h2.style.margin = "0px 0px"

            div.append(h2);
            document.querySelector("#popup").append(div);
            function showPopup() {
                document.querySelector("#popup").innerHTML = "";
            }

            setTimeout(showPopup, 3000);
    } else {
        // Checking if Email is already Registered or Not
        let flag = "false";
        for (let a = 0; a < storeData.length; a++) {
            if (storeData[a].email == email.value) {
                flag = "true";
                break;
            }
        }
        // If email is already Registered then Alerting the User
        if (flag == "true") {
            let div = document.createElement("div");
            div.style.backgroundColor = "red";
            let h2 = document.createElement("h2");
            h2.innerText = "Your Email is already Registered";
            h2.style.color = "white";
            div.style.width = "fit-content";
            div.style.height = "fit-content";
            div.style.padding = "10px 30px";
            div.style.margin = "auto"
            h2.style.fontSize = "16px";
            h2.style.margin = "0px 0px"

            div.append(h2);
            document.querySelector("#popup").append(div);
            function showPopup() {
                document.querySelector("#popup").innerHTML = "";
            }

            setTimeout(showPopup, 3000);
        } else {
            if (password.value.length >= 6) {
                // If email is not Registered then Successfully Registering
                let obj = {
                    firstName: firstName.value,
                    LastName: LastName.value,
                    email: email.value,
                    password: password.value
                }

                storeData.push(obj)
                localStorage.setItem("data", JSON.stringify(storeData));

                let div = document.createElement("div");
                div.style.backgroundColor = "rgb(11, 199, 199)";
                div.style.width = "fit-content";
                div.style.height = "fit-content";
                div.style.padding = "10px 30px";
                div.style.margin = "auto"
                let h2 = document.createElement("h2");
                h2.innerText = "Details saved  Please Login!";
                h2.style.color = "white";
                h2.style.fontSize = "16px";
                h2.style.margin = "0px 0px"

                div.append(h2);
                document.querySelector("#popup").append(div);


                firstName = document.querySelector("#FirstName").value = "";
                LastName = document.querySelector("#LastName").value = "";
                email = document.querySelector("#email").value = "";
                password = document.querySelector("#password").value = "";

                function showPopup() {
                    document.querySelector("#popup").innerHTML = "";
                    window.location.href = "/project/login.html";
                }

                setTimeout(showPopup, 4000);
            } else {
                let div = document.createElement("div");
                div.style.backgroundColor = "red";
                let h2 = document.createElement("h2");
                h2.innerText = "Password length should be more then 5";
                h2.style.color = "white";
                div.style.width = "fit-content";
                div.style.height = "fit-content";
                div.style.padding = "10px 30px";
                div.style.margin = "auto"
                h2.style.fontSize = "16px";
                h2.style.margin = "0px 0px"

                div.append(h2);
                document.querySelector("#popup").append(div);
                function showPopup() {
                    document.querySelector("#popup").innerHTML = "";
                }

                setTimeout(showPopup, 3000);
            }
        }
    }





});


let showPass = document.querySelector("#showPass");
showPass.addEventListener("click", function () {
    let password = document.querySelector("#password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})