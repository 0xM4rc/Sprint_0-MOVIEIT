document.addEventListener('DOMContentLoaded', init);

let inputs = ['text','email', 'password', 'password'];
let placeholders = ['User Name','Email', 'Password', 'Confirm password'];
let form;

function init() {
    form = document.getElementById("form")
    let df = new DocumentFragment();
    inputs.forEach((input, index) => {
        let inputElement = document.createElement('input')
        inputElement.type = input;
        inputElement.placeholder = placeholders[index];
        inputElement.className = 'register-input';
        df.appendChild(inputElement);
    })
    form.insertBefore(df, document.querySelector("button"));
}