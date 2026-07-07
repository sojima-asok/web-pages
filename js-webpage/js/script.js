
//Calculator

let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{

    button.addEventListener('click', (e) =>{
 
         switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                    default:
                        display.innerText += e.target.innerText;
         }
    });
});

//Counter

let count = 0;

const decrement = () => {
    if (count > 0){
        count--;
        updateCount();
    }
}

const increment = () => {
    count++;
    updateCount();

}

const reset = () => {
    count = 0;
    updateCount();
}

const updateCount = () => {
    const countElement = document.querySelector('.count span');
    countElement.textContent = count;
}

const decrementButton = document.querySelector('.decrement');
decrementButton.addEventListener('click', decrement);

const incrementButton = document.querySelector('.increment');
incrementButton.addEventListener('click', increment);

const resetButton = document.querySelector('.reset');
resetButton.addEventListener('click', reset);

//Form Validation

const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(name === "" || email === "" || password === "" || confirmPassword === ""){
        message.style.color = "red";
        message.textContent = "Please fill all fields!";
        return;
    }

    if(password.length < 6){
        message.style.color = "red";
        message.textContent = "Password must be at least 6 characters!";
        return;
    }

    if(password !== confirmPassword){
        message.style.color = "red";
        message.textContent = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.textContent = "Registration Successful!";

    form.reset();
});