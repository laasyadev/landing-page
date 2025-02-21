//add event listener when form has been submitted
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); //prevents page from reloading after form is submitted

    let email = document.getElementById("email").value; //get email input from user
    let message = document.getElementById("message"); //get the message <p> to display feedback

    //check if email contains "@" and "." to check if its valid
    if (email.includes("@") && email.includes(".")) {
        message.style.color = "green"; //set message color to green
        message.textContent = "Thank you for signing up!"; //success message
        document.getElementById("email").value = ""; //clear the input field after submission is successful
    } else {
        message.style.color = "red"; //change the message color to red
        message.textContent = "Please enter a valid email!"; //error message
    }
});
