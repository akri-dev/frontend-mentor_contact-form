function successMessage() {
}

function validateForm() {

// TO MAKE CODE MUCH MORE FLUID, Validate on input change, only submit when Submit button clicked
// refer to https://stackoverflow.com/questions/9537409/javascript-validate-on-input-change-only-submit-when-submit-button-clicked

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
    const validationQuery = document.getElementById("validation-query-type");

    const fieldsToValidate = ["first_name", "last_name", "email_address", "message_box"];
    const emailAddressToValidate = ["email_address"];
    const validationQueryRadio = document.getElementsByName("query_type");

    let isFormValid = true; // Tracks overall field form validity
    let isEmailFieldEmpty = true; // tracks if Email Field is Empty  (for validation if Email is right 
    let isQueryRadioSelected = false;

    //validates 4 field empty
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

    // validate empty query
    var validationQueryCounter = 0

    //while tracker is false AND Query Counter is 0 less than 2, then it's true
    while (!isQueryRadioSelected && validationQueryCounter < validationQueryRadio.length) {
        //if Radio for each is checked and all true, increase counter until false WHILE 
        if (validationQueryRadio[validationQueryCounter].checked) isQueryRadioSelected = true;
        validationQueryCounter++; //will run regardless if is true or false
    }

    if (!isQueryRadioSelected) validationQuery.innerHTML = "Please select a query type";

    const emailValue = form[emailAddressToValidate].value.trim();

    if(emailValue === "") {
        isEmailFieldEmpty = true;
    } else {
        isEmailFieldEmpty = false;
    }
    
    //for arrays, include form element
    if (!form[emailAddressToValidate].value.includes('@')) { //if email address input !include @
        validationParagraph[2].innerHTML = "Please enter a valid email address"; 

    } else {
        if(!isEmailFieldEmpty) validationParagraph[2].innerHTML = "";
    }

    if (!isFormValid && !isQueryRadioSelected) { // if tracker is false, return value will be false
        return false; // form will not submit

    } else {
        return true;
    }
    
}