function validate() {
    const usernameField = document.getElementById("username");
    const emailField = document.getElementById("email");
    const passField = document.getElementById("password");
    const confirmPassField = document.getElementById("confirm-password");
    const isCompany = document.getElementById("company");
    const companyNum = document.getElementById("companyNumber");
    isCompany.addEventListener("change", appear);
    function appear(ev) {
        const companyField = document.getElementById("companyInfo")
        if (companyField.style.display == "none")
            companyField.style.display = "block";
        else {
            companyField.style.display = "none"
        }
    }
    const submittButton = document.getElementById("submit");
    submittButton.addEventListener("click", isValid);
    function isValid(ev) {
        ev.preventDefault();
        let validFlag = true;
        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        const passPattern = /^[\w]{5,15}$/;
        const emailPattern = /@.*\.+/;
        if (!usernamePattern.test(usernameField.value)) {
            usernameField.style.border = "";
            usernameField.style.borderColor = "red";
            validFlag = false;
        } else {
            usernameField.style.border = "none";

        }
        if (!emailPattern.test(emailField.value)) {
            emailField.style.border = "";
            emailField.style.borderColor = "red";
            validFlag = false;
        } else {
            emailField.style.border = "none";
        }
        if (!passPattern.test(passField.value) || passField.value !== confirmPassField.value) {
            passField.style.border = "";
            passField.style.borderColor = "red";
            confirmPassField.style.border = "";
            confirmPassField.style.borderColor = "red";
            validFlag = false;
        } else {
            passField.style.border = "none";
            confirmPassField.style.border = "none";
        }
        if (isCompany.checked) {
            if (Number(companyNum.value) < 1000 || Number(companyNum.value) > 9999) {
                validFlag = false;
                companyNum.style.border = "";
                companyNum.style.borderColor = "red";
            } else {
                companyNum.style.border = "none";
            }
        }
        const validText = document.getElementById("valid");

        if (validFlag) {
            validText.style.display = "block";
        } else {
            validText.style.display = "none";
        }
    }
}
