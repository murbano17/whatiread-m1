'use strict';


class Validator {
    constructor() {
        // mensajes predeterminados
        this.invalidEmailError = 'Introduce a valid email';
        this.emailExistsError = 'Email exists';
        this.passwordError = 'Introduce a valid password';
        this.repeatPasswordError = 'Passwords are not the same';

        // objeto con los errores que vamos a mostrar al usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }
    //validar el nombre del email
    validateValidEmail = (email) => {
        //comprobar si el email es válido, y si es así, quitar el mensaje
        if (this.emailIsValid(email)) {
            delete this.errors.invalidEmailError;
            //si el email no es válido, poner el mensaje de nuevo
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
        }
    }


    //función auxiliar de validateValidEmail
    emailIsValid = (email) => {
        // RegEx es un objeto especial que contiene las reglas para que algo sea válido
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        //método test comprueba si el cumple los requisitos del RegEx
        const isValid = emailRegEx.test(email);

        return isValid;
    }

    // validar que el email es único
    validateUniqueEmail = (newEmail) => {
        const usersDB = db.getAllUsers();

        let emailUnique = true;

        if (usersDB.length > 0) {
            usersDB.forEach((userObj) => {
                // si el email ya existe, hay que cambiar el valor de 'false'
                if (userObj.email === newEmail) {
                    emailUnique = false;
                }
            })

            if (emailUnique) {
                // elimina el mensaje de error
                delete this.errors.emailExistsError;
            } else {
                // si el email ya existe, poner el mensaje de error
                this.errors.emailExistsError = this.emailExistsError
            }

        }
    }

    //validar longitud del password
    validatePassword = (password) => {
        if (password.length > 5) {
            delete this.errors.passwordError;
        } else {
            //si el password no cumple con la condición de +de 5 muestra el error
            this.errors.passwordError = this.passwordError;
        }
    }

    //validar si la constraseña coincide
    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat) {
            //si los passwords son iguales, quita el error
            delete this.errors.repeatPasswordError;
        } else {
            //si los passwords no son iguales, muestra el error
            this.errors.repeatPasswordError = this.repeatPasswordError;
        }
    }

    //obtener el objeto con errores para mostrarlos al usuario en la página
    getErrors = () => {
        return this.errors;
    }


    //reiniciar los errores para el próximo SignUp
    resetValidator = () => {
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }
}

const validator = new Validator();