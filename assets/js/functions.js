// format is the same in creating IPO Structure
const form = document.forms["contact_form"];
const validationParagraph = document.getElementsByClassName("validation-paragraph");
const validationQuery = document.getElementById("validation-query-type");

const fieldsToValidate = ["first_name", "last_name", "email_address", "message_box"];
const emailAddressToValidate = ["email_address"];
const checkboxToValidate = ["consent_checkbox"];
const validationQueryRadio = document.getElementsByName("query_type");
const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // for validating email, use test()
const textBoxes = document.getElementsByTagName('input');
const textAreaBox = document.getElementsByTagName('textarea');

let isFormValid = true; // Tracks overall field form validity
let isEmailFieldEmpty = true; // tracks if Email Field is Empty  (for validation if Email is right 
let isQueryRadioSelected = false;
let emailRegExValid = false; 
let errorColorValidation = 'border: 1px solid hsl(0, 66%, 54%);';
let validColorValidation = '1px solid hsl(169, 82%, 27%);';

function successMessage() {
}



function validateForm() {
    // validate empty query
    var validationQueryCounter = 0
// TO MAKE CODE MUCH MORE FLUID, Validate on input change, only submit when Submit button clicked
// refer to https://stackoverflow.com/questions/9537409/javascript-validate-on-input-change-only-submit-when-submit-button-clicked

    // var x = document.forms["contact_form"]["first_name"].value;
    // if (x == "") {
    //     var validationParagraph = document.getElementsByClassName("validation-paragraph");
    //     for (let i = 0; i < 4; i++) {
    //         validationParagraph[i].innerHTML = "This field is required.";
    //       } // loop when need to work on multiple arrays with the same data value   
    // }

    //validates 4 field empty when submitting
    for (let i = 0; i < fieldsToValidate.length; i++) { 
        const fieldName = fieldsToValidate[i];
        const fieldValue = form[fieldName].value.trim();
        if (fieldValue === "") {
            if (i == 2) {
                validationParagraph[i].innerHTML = "Please enter a valid email address";
            } else {
                validationParagraph[i].innerHTML = "This field is required";
            }
            textAreaBox[0].style = errorColorValidation;
            textBoxes[i].style = errorColorValidation;
        } else {
            validationParagraph[i].innerHTML = "";
            textBoxes[i].style = validColorValidation;
            textAreaBox[0].style = validColorValidation;
        }
        
    }

    //while tracker is false AND Query Counter is 0 less than 2, then it's true
    while (!isQueryRadioSelected && validationQueryCounter < validationQueryRadio.length) {
        //if Radio for each is checked and all true, increase counter until false WHILE 
        if (validationQueryRadio[validationQueryCounter].checked) {
            validationQuery.innerHTML = "";
            isQueryRadioSelected = true; 
        }         
        if (!isQueryRadioSelected) {
            validationQuery.innerHTML = "Please select a query type";
            isQueryRadioSelected = false;
        }
        validationQueryCounter++; //will run regardless if is true or false

    }
    const emailValue = form[emailAddressToValidate].value;
    //for arrays, include form element
    if (emailValue === "") {
        console.log('should be empty');
        validationParagraph[2].innerHTML = "Please enter a valid email address";
        textBoxes[2].style = errorColorValidation;
        textAreaBox[0].style = errorColorValidation;
        isEmailFieldEmpty = true;
    }else if (!emailRegEx.test(form[emailAddressToValidate].value)) { //if email address input !include @
        validationParagraph[2].innerHTML = "Please enter a valid email address";
        isEmailFieldEmpty = false;
    } else {
        isEmailFieldEmpty = false;
        if(!isEmailFieldEmpty){
            validationParagraph[2].innerHTML = "";
            textAreaBox[0].style = validColorValidation;
            textBoxes[2].style = validColorValidation;
        }
        
    }

    if(!form[checkboxToValidate].checked) {
        validationParagraph[4].innerHTML = " To submit this form, please consent to being contacted";
    } else {
        validationParagraph[4].innerHTML = "";
    }

    if (form[fieldsToValidate[0]].value == "" || form[fieldsToValidate[1]].value == "" || form[fieldsToValidate[2]].value == "" || form[fieldsToValidate[3]].value == "" || emailRegEx.test(form[emailAddressToValidate].value) == false || isEmailFieldEmpty == true || form[checkboxToValidate].checked == false || isQueryRadioSelected == false) {
        isFormValid = false;
    } else {
        isFormValid = true;
    }

    if (!isFormValid) { // if tracker is false, return value will be false
        return false; // form will not submit

    } else {
        document.getElementById("contact-form").reset();
        showToast();
    }   
}

function showToast() {
    var toastNotification = document.getElementById("toast-notification");
    toastNotification.classList.add("show"); // Correctly add the "show" class
    setTimeout(function() {
      toastNotification.classList.remove("show");
    }, 3000);
  }

function dynamicRadio() {
    const radioButtons = document.getElementsByName("query_type");

    for (var i = 0 ; i < radioButtons.length ; i++) {
        if (radioButtons[i].checked === true) {
            validationQuery.innerHTML = "";
        }
    }
}

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
    if (arrayValue == 2) {
        //for arrays, include form element
        if (fieldValue === "") {
            validationParagraph[arrayValue].innerHTML = "Please enter a valid email address";
            textBoxes[arrayValue].style = errorColorValidation;
            isEmailFieldEmpty = true;
        }
        else if (!emailRegEx.test(form[emailAddressToValidate].value)) { //if email address input !include @
            validationParagraph[arrayValue].innerHTML = "Please enter a valid email address";
            textBoxes[arrayValue].style = errorColorValidation;
            textAreaBox[0].style = errorColorValidation;
            isEmailFieldEmpty = false;
        } else { // point to change {delete when done}
            isEmailFieldEmpty = false;
            if(!isEmailFieldEmpty) {
                validationParagraph[arrayValue].innerHTML = "";
                textBoxes[arrayValue].style = validColorValidation;
                textAreaBox[0].style = validColorValidation;
            }
            emailRegExValid = true;
        }
    }

    if (arrayValue != 2) {
        if (fieldValue === "") {
            validationParagraph[arrayValue].innerHTML = "This field is required";
            textBoxes[arrayValue].style = errorColorValidation;
            textAreaBox[0].style = errorColorValidation;
        } else {
            validationParagraph[arrayValue].innerHTML = "";
            textBoxes[arrayValue].style = validColorValidation;
            textAreaBox[0].style = validColorValidation;
        }
    }
}

function selectRadio(radioId) {
    document.getElementById(radioId).checked = true;
    dynamicRadio(); 
  }