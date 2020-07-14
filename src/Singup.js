"use strict";

class Signup {
  constructor() {
    this.nameInput = document.querySelector("#name");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-button");
    this.errorsWrapper = document.querySelector(".message-container");
  }

  //cambios del input "email"
  handleEmailInput = (event) => {
    const email = event.target.value;

    //validar el texto del input email
    validator.validateValidEmail(email);

    const errors = validator.getErrors();

    //si el nombre del email es válido
    if (!errors.invalidEmailError) {
      //comprobar si el email es único
      validator.validateUniqueEmail(email);
    }

    // TODO mostrar los errores si hay algunos
    this.setErrorMessages();
  };

  //cambios del input "password"
  handlePasswordInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    //validar el texto del input password
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);
    // TODO mostrar los errores si hay algunos
    this.setErrorMessages();
  };

  //cambios del input "repeat-password"
  handleRepeatPasswordInput = (event) => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;

    //validar el texto del input password y del repeatPassword
    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    // TODO mostrar los errores si hay algunos
    this.setErrorMessages();
  };

  //gestionar envio de daatos (submit)"
  saveData = (event) => {
    // cuando el evento ocurre, cancelar y no recargar la página
    event.preventDefault();
    // recoger los valores de cada input
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;

    const newUser = new User(name, email, password);

    // guardar el nuevo usuario en la base de datos que hemos simulado
    db.saveNewUser(newUser);

    //vaciar el formulario
    this.nameInput.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.repeatPasswordInput.value = "";

    this.showSuccessMessage();
    this.removeMessages();
  };

  //registrar funciones para cada input/campo
  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener(
      "input",
      this.handleRepeatPasswordInput
    );

    this.buttonInput.addEventListener("click", this.saveData);
  };

  showSuccessMessage = () => {
    // vacia los errores para que no se sumen
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();
    // convertir el objeto a un array de strings
    const errorsStringsArr = Object.values(errorsObj);

    if (errorsStringsArr.length > 1) {
      return;
    }


    const successMessageP = document.createElement("p");
    successMessageP.innerHTML = "Account done";
    successMessageP.classList.add("accountdone-message");

    this.errorsWrapper.appendChild(successMessageP);
  };





  removeMessages = () => {
    setTimeout(() => {
      this.errorsWrapper.innerHTML = "";
    }, 2000);
  };

  setErrorMessages = () => {
    // vacia los errores para que no se sumen
    this.errorsWrapper.innerHTML = "";

    const errorsObj = validator.getErrors();

    // convertir el objeto a un array de strings
    const errorsStringsArr = Object.values(errorsObj);

    errorsStringsArr.forEach((errorStr) => {
      const errorMessageP = document.createElement("p");
      errorMessageP.innerHTML = errorStr;

      this.errorsWrapper.appendChild(errorMessageP);
    });
  };
}

// crear una nueva instancia del objeto signup
const signup = new Signup();

window.addEventListener("load", signup.addListeners);