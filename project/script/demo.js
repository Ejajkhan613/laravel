

let submit = document.querySelector("#submit");
submit.addEventListener("click", function (el) {
    el.preventDefault();
    let firstName = document.querySelector("#firstName");
    let lastName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let companyName = document.querySelector("#companyName");
    let websiteURL = document.querySelector("#websiteURL");
    let employees = document.querySelector("#employee");
    if (firstName.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your First Name";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (lastName.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Last Name";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (email.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Email";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (phone.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Mobile Number";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (phone.value.length < 10) {
        console.log(phone.value.length)
        let text = document.querySelector("#showError > h2");
        text.innerText = "Mobile Number is Wrong";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (companyName.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Company Name";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (websiteURL.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Website URL";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    } else if (employees.value == "") {
        let text = document.querySelector("#showError > h2");
        text.innerText = "Please fill your Employees Detail";
        let show = document.querySelector("#showError");
        show.style.display = "block";

        function stop() {
            let text = document.querySelector("#showError > h2");
            text.innerText = "";
            let show = document.querySelector("#showError");
            show.style.display = "none";
        }
        setTimeout(stop, 2500);
    }
    else {
        let obj = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            companyName: companyName.value,
            websiteURL: websiteURL.value,
            employees: employees.value
        }
        formData.push(obj);
        localStorage.setItem("form", JSON.stringify(formData));

        document.querySelector("form").reset();

        let notice = document.querySelector("#notice");
        notice.style.display = "block";
        function stop() {
            let notice = document.querySelector("#notice");
            notice.style.display = "none";
        }
        setTimeout(stop, 5000);
    }
})


let formData = JSON.parse(localStorage.getItem("form")) || [];