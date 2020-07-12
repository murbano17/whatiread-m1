'use strict'

class Database {
    //recuperar los usuarios, se van a guardar dentro de un array
    getAllUsers = () => {
        //recuperar el string
        const usersStr = localStorage.getItem('users');
        const usersArr = JSON.parse(userStr);

        //si todavia no hay usuario, devuelve el array vacío
        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }

    }


    saveNewUser = (newUser) => {

        //recuperar el array de los usuarios del localStorage
        const usersArr = this.getAllUsers();

        //actualizar el array de usuarios
        usersArr.push(newUser);

        //convertir el array en un string
        const usersStr = JSON.stringify(usersArr);

        //almacenarlo de nuevo
        localStorage.setItem('users', usersStr);


    }

    const db = new Database();

}