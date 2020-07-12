'use strict'

class Signup {
    constructor() {
        this.nameInput = document.querySelector("#name")
        this.emailInput = document.querySelector("#email")
        this.passwordInput = document.querySelector('#password')
        this.repeatPasswordInput = document.querySelector('#repeat-password')

        this.buttonInput = document.querySelector('#signup-button')
        this.errorsWrapper = document.querySelector('.message-container')

    }

    //cambios del input "email"
    handleEmailInput = (event) => {
        const email = event.target.value;
        console.log('email', email);

        //validar el texto del input email

    }

    //cambios del input "password"
    handlePasswordInput = (event) => {
        const password = event.target.value;
        console.log('password', password);
    }

    //cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;
        console.log('repeatPassword', repeatPassword);
    }

    //gestionar envio de daatos (submit)"
    saveData = (event) => {
        //recoger los valores de cada input
        const name = this.nameInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;

        const newUser = new User(name, email, password);


        /*
         *Pseudocódigo
         * // guardar el nuevo usuario en la base de datos (simulada)
         * database.createNewUser(newUser);
         */


        //vaciar el formulario

        this.nameInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

    }

    //registrar funciones para cada input/campo
    addListeners = () => {
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener('click', this.saveData)
    }

}


//crear una nueva instancia

const signup = new SignUp();

window.addEventListener('load', signup.addListeners);