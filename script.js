function ValidateForm(e) {

    e.preventDefault()

    let data = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        password: "" 
    };

    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let Email = document.getElementById("email").value;
    let Contact = document.getElementById("phone").value;
    let Password = document.getElementById("password").value;

    let fnameError = document.getElementById("fname-error");
    let lnameError = document.getElementById("lname-error");
    let emailError = document.getElementById("email-error");
    let phoneError = document.getElementById("phone-error");
    let passwordError = document.getElementById("password-error");

    
    fnameError.textContent = "";
    lnameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    
    if (!firstName) {
        fnameError.textContent = "Please Enter First Name";
        isValid = false;
    } else {
        data.first_name = firstName; 
    }

    
    if (!lastName) {
        lnameError.textContent = "Please Enter Last Name";
        isValid = false;
    } else {
        data.last_name = lastName; 
    }

   
    if (Email === "" || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email)) {
        emailError.textContent = "Please Enter Email";
        isValid = false;
    } else {
        data.email = Email; 
    }

   
    if (Contact === "" || !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(Contact)) {
        phoneError.textContent = "Enter mobile number in proper format";
        isValid = false;
    } else {
        data.phone_number = Contact; 
    }

   
    if (Password === "" || Password.length < 8) {
        passwordError.textContent = "Please enter a password with at least 8 characters.";
        isValid = false;
    } else {
        data.password = Password; 
    }

    
    if (isValid) {
        console.log(data); 
        alert("Submitted Successfully")
    }

    return isValid; 
}