'use strict';

class Login {
    constructor() {

        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password'); //en el html he de posar els # com a id als inputs

        this.loginButton = document.querySelector('#login-button');
        this.messageContainer = document.querySelector("#message-container");

    }

    // gestionar el envío de los datos cuando se hace el evento "submit"
    submit = (event) => {
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;


        // intentar encontrar el usuario registrado 
        const user = usersDB.find((userObj) => {
            if (userObj.email === email && userObj.password === password) {
                return true;
            }
        })

        this.showMessage(user)
    }

    //mostrar el mensaje de error/éxito
    showMessage = (user) => {

        this.messageContainer.innerHTML = "";

        const message = document.createElement('p');

        if (user) {
            //si el usuario fue encontrado, mensaje de éxito
            message.innerHTML = `hola, ${user.email}`;
            message.classList.add("correct-message");

        } else {
            message.innerHTML = 'el email y/o el password son erroneos';
        }

        this.messageContainer.appendChild(message);

        if (user) {
            this.redirect();
        }
    }

    redirect =() => {
        setTimeout(()=> location.assign('index.html'), 2000)
    }

}



const login = new Login();
login.loginButton.addEventListener('click', login.submit);