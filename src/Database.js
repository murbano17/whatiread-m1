'use strict'


class Database {
    //recuperar los usuarios dentro del array
    getAllUsers = () => {
        const usersStr = localStorage.getItem('users'); //nos da un string
        const usersArr = JSON.parse(usersStr) //convierte sting en array
        /* si todavia no hay usuarios devuelve el array vacío, sinó devuelve el usersStr con 
         el nombre del users.string */

        if (usersArr === null) {
            return [];
        } else {
            return usersArr;
        }

    }

    saveNewUsers = (newUser) => {
        // recuperar el string (array) de los usuarios del localStorage
        const usersArr = this.getAllUsers();

        //actualizar el array de usuarios
        usersArr.push(newUser);

        //convertir el array a un string
        const usersStr = JSON.stringify(usersArr);

        // almacenarlo de nuevo
        localStorage.setItem('users', usersStr)

    }

}


const db = new Datbase();