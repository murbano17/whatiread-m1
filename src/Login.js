'use strict';

class Login {
    constructor() {
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");

        this.loginButton = document.querySelector("#login-button");
        this.messageContainer = document.querySelector(".message-container");
    }

    // gestionar el envio de los datos (evento "submit")
    submit = (event) => {
        event.preventDefault();

        const usersDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        // Intentar encontrar el usuario
        const user = usersDB.find((userObj) => {
            if (userObj.email === email && userObj.password === password) {
                return true;
            }
        })


        this.showMessage(user);
    }

    // mostrar el mensaje de error o mensaje de exito
    showMessage = (user) => {
        console.log('hello')
        // eliminar el mensaje previo
        this.messageContainer.innerHTML = "";

        const message = document.createElement('p');

        if (user) {
            // si el usuario inicia la sesion con exito
            // agrega la clase para cambiar el color y sobrescribir el estilo anterior
            message.innerHTML = `Welcome, ${user.email}`;
            message.classList.add("correct-message");
        } else {
            // si el inicio de sesión no se ha realizado correctamente
            message.innerHTML = 'email or password are incorrect';
        }

        this.messageContainer.appendChild(message);

    }


}


const login = new Login();

login.loginButton.addEventListener("click", login.submit);