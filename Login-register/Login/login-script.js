document.addEventListener('DOMContentLoaded', init);

let inputs = ['email', 'password'];
let placeholders = ['Email', 'Password'];
let form;

function init() {
    form = document.getElementById("form")
    let df = new DocumentFragment();
    inputs.forEach((input, index) => {
        let inputElement = document.createElement('input')
        inputElement.type = input;
        inputElement.placeholder = placeholders[index];
        inputElement.className = 'input';
        df.appendChild(inputElement);
    })
    form.appendChild(df);
}