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

    for (let i = 0; i < fieldsToValidate[i].length; i++) {
        const fieldName = fieldsToValidate[i];
        const fieldValue = fieldsToValidate[i].value;
        
    }

}