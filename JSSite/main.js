// Function to change text or images when buttons are clicked
function changeContent(contentId, newContent) {
    const element = document.getElementById(contentId);
    element.innerHTML = newContent;
}

// Function to validate input in a field and display error if necessary
function validateInput() {
    const inputElement = document.getElementById("input-field");
    const value = inputElement.value;
    const errorElement = document.getElementById('error-message');

    if (value == '') {
        errorElement.textContent = 'Input is Empty!';
    } else {
        errorElement.textContent = '';
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
