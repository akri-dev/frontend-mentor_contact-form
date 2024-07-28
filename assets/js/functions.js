function successMessage() {
}

function validateForm() {
    // var x = document.forms["contact_form"]["first_name"].value;
    // if (x == "") {
    //     var validationParagraph = document.getElementsByClassName("validation-paragraph");
    //     for (let i = 0; i < 4; i++) {
    //         validationParagraph[i].innerHTML = "This field is required.";
    //       } // loop when need to work on multiple arrays with the same data value   
    // }

    // format is the same in creating IPO Structure
    const form = document.forms["contact_form"];
    const validationParagraph = document.getElementsByClassName("validation-paragraph");
    const fieldsToValidate = ["first_name", "last_name", "email_address", "message_box"];

    let isFormValid = true; // Tracks overall form validity

    for (let i = 0; i < fieldsToValidate.length; i++) {
        const fieldName = fieldsToValidate[i];
        const fieldValue = form[fieldName].value.trim();
        
        if (fieldValue === "") {
            validationParagraph[i].innerHTML = "This field is required";
            isFormValid = false; //changes the tracker so that form will not submit
        } else {
            validationParagraph[i].innerHTML = "";
        }
    }
    if (!isFormValid) { // if tracker is false, return value will be false
        return false; // form will not submit

    } else {
        return true;
    }
    
}