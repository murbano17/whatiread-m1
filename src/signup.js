'use strict';


class SignUp {
    constructor() {
        this.nameInput = document.querySelector('#name');
        this.pokemonInput = document.querySelector('#pokemon');
        this.typeInput = document.querySelector('#type');
        this.emailInput = document.querySelector('#email');
        this.passwordInput = document.querySelector('#password');
        this.repeatPasswordInput = document.querySelector('#repeat-password');


        this.buttonInput = document.querySelector("#singup-button");
        this.errorWrapper = document.querySelector('.message-container');
    }


    // gestionar cambios del input "email"
    handleEmailInput = (event) => {
        const email = event.target.value;


        // validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        // si el nombre del email es valido
        if (!errors.invalidEmailError) {
            //comprueba si el email es único
            validator.validateUniqueEmail(email);
        }
        //mostrar los errores si hay algunos
        this.setErrorMessages();
    }

    // gestionar cambios del input "password"
    handlePassowordInput = (event) => {
        const password = event.target.value;
        const passwordRepeat = this.repeatPasswordInput.value;

        // validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);

        //mostrar los errores si hay algunos
        this.setErrorMessages();

    }

    // gestionar cambios del input "repeat-password"
    handleRepeatPasswordInput = (event) => {
        const repeatPassword = event.target.value;
        const password = this.passwordInput.value;

        // validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);


        //mostrar los errores si hay algunos
        this.setErrorMessages();


    }

    // gestionar el envio de los datos (submit)
    saveData = (event) => {
        // Cuando el evento ocurre, cancelo y no recargue la página
        event.preventDefault();
        // recoger los valores de cada input
        const name = this.nameInput.value;
        const pokemon = this.pokemonInput.value;
        const type = this.typeInput.value;
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        const repeatPassword = this.repeatPasswordInput.value;

        function createUser(name, pokemon, type, email, password) {
            const userObj = {
                name: name, // si los nombres son los mismos se puede poner solo 1
                pokemon: pokemon,
                type: type,
                email: email,
                password: password
            }

            return userObj;

        }

        const newUser = createUser(name, pokemon, type, email, password);


        //guardar el nuevo usuario en la base de datos (simulada)
        db.saveNewUser(newUser);

        // vaciar el formulario
        this.nameInput.value = "";
        this.pokemonInput.value = "";
        this.typeInput.value = "";
        this.emailInput.value = "";
        this.passwordInput.value = "";
        this.repeatPasswordInput.value = "";

    }


    // registrar funciones para cada input / campo
    addListeners = () => {
        this.emailInput.addEventListener('input', this.handleEmailInput);
        this.passwordInput.addEventListener('input', this.handlePassowordInput);
        this.repeatPasswordInput.addEventListener('input', this.handleRepeatPasswordInput);

        this.buttonInput.addEventListener('click', saveData);

    }

    setErrorMessages = () => {
        // vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();

        // convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);

        errorsStringsArr.forEach((errorStr) => {
            const errorMessageP = document.createElement('p');
            errorMessageP.innerHTML = errorStr;

            this.errorsWrapper.appendChild(errorMessageP);
        })

    }

}

// crar una nueva instancia del Signup (objeto)
const signup = new SignUp();

window.addEventListener('load', singup.addListeners);