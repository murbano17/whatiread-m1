'use strict';

class Validator {
    constructor() {
        this.invalidEmailError = "Invalid e-mail";
        this.emailExistsError = "This e-mail exists";
        this.passwordError = 'Introduce a password with 6 or more characters';
        this.repeatPasswordError = 'The password is not the same';



        // objeto con los errores que vamos a mostrar al usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError

        }
    }
    // validar el nombre del e-mail
    validateValidEmail = (email) => {

        // si el email es válido, quita el mensaje de error
        if (this.emailIsValid(email)) {
            delete this.errors.invalidEmailError;
            // si el email no es válido, poner el mensaje de error.
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
        }
    }


    // función auxiliar de 'validateValidEmail'
    emailIsValid = (email) => {

        //comprobar si el email es válido. Si es válido quitar error.
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        // metodo `test`prueba si la cadena cumple las reglas. devuelve 'true o false'
        emailRegex.test(email);

        return isValid;


    }
    // validar si el e-mail ya existe

    validateUniqueEmail = (newEmail) => {
        const usersDB = db.getAllUsers();

        if (usersDB.length > 0;) {
            usersDB.forEach((usersObj) => {
                //si el email ya está registrado, cambia el valor de la variable a 'false'
                if (usersObj.email === newEmail) {
                    emailUnique = false;
                }
            })
            if (emailUnique) {
                // quita el mensaje de error si el email es unico
                delete this.errors.emailExistsError;
            } else {
                // si no es único, poner el mensaje de nuevo
                this.errors.emailExistsError = this.emailExistsError
            }
        }
    }

    /////buscar RegEx de CONTRASEÑA Y HACER LO MISMO QUE ARRIBA PARA EL PROYECTO
    // validar la contraseña (longitud)
    validatePassword = (password) => {
        if (password.length > 5) {
            //quita el mensaje de error
            delete this.errors.passwordError;
        } else {
            // se pone el mensaje de error si tiene menos de 5 caracteres
            this.errors.passwordError = this.passwordError;
        }
    }

    // validar si la contraseña no es la misma
    validatePasswordRepeat = (password, passwordRepeat) => {
        if (password === passwordRepeat) {
            delete this.errors.repeatPasswordError;
        } else {
            this.errors.repeatPasswordError = this.repeatPasswordError;
        }
    }

    //obtener objeto con errores
    getErrors = () => {
        return this.errors;
    }

    // reiniciar los errores mostrados
    resetValidator = () => {
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            repeatPasswordError: this.repeatPasswordError
        }
    }


}

const validator = new Validator();