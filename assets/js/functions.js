// format is the same in creating IPO Structure
const form = document.forms["contact_form"];
const validationParagraph = document.getElementsByClassName("validation-paragraph");
const validationQuery = document.getElementById("validation-query-type");

const fieldsToValidate = ["first_name", "last_name", "email_address", "message_box"];
const emailAddressToValidate = ["email_address"];
const checkboxToValidate = ["consent_checkbox"];
const validationQueryRadio = document.getElementsByName("query_type");
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // for validating email, use test()


let isFormValid = true; // Tracks overall field form validity
let isEmailFieldEmpty = true; // tracks if Email Field is Empty  (for validation if Email is right 
let isQueryRadioSelected = false;

// validate empty query
var validationQueryCounter = 0

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

    //while tracker is false AND Query Counter is 0 less than 2, then it's true
    while (!isQueryRadioSelected && validationQueryCounter < validationQueryRadio.length) {
        //if Radio for each is checked and all true, increase counter until false WHILE 
        if (validationQueryRadio[validationQueryCounter].checked) isQueryRadioSelected = true;
        validationQueryCounter++; //will run regardless if is true or false
    }

    if (!isQueryRadioSelected) {
        validationQuery.innerHTML = "Please select a query type";
    }else {
        validationQuery.innerHTML = "";
    }

    const emailValue = form[emailAddressToValidate].value.trim();

    if(emailValue === "") {
        isEmailFieldEmpty = true;
    } else {
        isEmailFieldEmpty = false;
    }
    
    //for arrays, include form element
    if (!emailRegEx.test(form[emailAddressToValidate].value)) { //if email address input !include @
        validationParagraph[2].innerHTML = "Please enter a valid email address"; 
    } else {
        if(!isEmailFieldEmpty) validationParagraph[2].innerHTML = "";
    }

    if(!form[checkboxToValidate].checked) {
        validationParagraph[4].innerHTML = " To submit this form, please consent to being contacted";
    } else {
        validationParagraph[4].innerHTML = "";
    }

    if (!isFormValid && !isQueryRadioSelected) { // if tracker is false, return value will be false
        return false; // form will not submit

    } else {
        return true;
    }   
}

// function uncheckRadio() {
//     const radioButtons = document.getElementsByName("query_type");

//     for (var i = 0 ; i < radioButtons.length ; i++) {
//         if (radioButtons[i].checked == true) {
//             console.log(radioButtons[i].checked);
//             radioButtons[i].checked = false;
//             console.log(radioButtons[i].checked);
//         }
//     }
// }

function checkBox() {
    const checkBox = document.getElementById("consent-checkbox");

    if (!checkBox.checked === true) {
        validationParagraph[4].innerHTML = "To submit this form, please consent to being contacted";
    } else {
        validationParagraph[4].innerHTML = "";
    }
}

function fieldSynchronousValidation(arrayValue) {
    const fieldValue = form[fieldsToValidate[arrayValue]].value.trim();
    if (fieldValue === "") {
        validationParagraph[arrayValue].innerHTML = "This field is required";
    } else {
        validationParagraph[arrayValue].innerHTML = "";
    }
}

