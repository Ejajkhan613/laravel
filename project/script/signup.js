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
        document.querySelector("#popup").style.display = "block"
        let h2 = document.querySelector("#popup > h2");
        h2.innerText = "Please fill all the Details";

        function showPopup() {
            document.querySelector("#popup > h2").innerText = "";
            document.querySelector("#popup").style.display = "none"
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
            document.querySelector("#popup").style.display = "block"
            let h2 = document.querySelector("#popup > h2");
            h2.innerText = "Your Email is already Registered";




            function showPopup() {
                document.querySelector("#popup > h2").innerText = "";
                document.querySelector("#popup").style.display = "none"
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

                let div = document.querySelector("#successful").style.display = "block";
                let h2 = document.querySelector("#successful > h2");
                h2.innerText = "Details saved  Please Login!";


                function showPopup() {
                    let div = document.querySelector("#successful");
                    document.querySelector("#successful > h2").innerText = "";
                    div.style.display = "none";
                    document.querySelector("form").reset();
                    window.location.href = "/project/login.html";
                }

                setTimeout(showPopup, 4000);

            } else {
                document.querySelector("#popup").style.display = "block";
                let h2 = document.querySelector("#popup > h2");

                h2.innerText = "Password length should be more then 5";



                function showPopup() {
                    document.querySelector("#popup > h2").innerText = "";
                    let div = document.querySelector("#popup");
                    div.style.display = "none";
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