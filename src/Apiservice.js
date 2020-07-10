'use strict';


function getBooks = () => {
    // 

    const section = document.querySelector(".books-list"); //així s'ha de dir el meu div


    for (let i = 0; i < 21; i++) {

        //cada libro lleva su propio indice
        //tenemos que añadir el índice al fin de la URL de la API
        fetch(`https://www.googleapis.com/books/v1/volumes?q=drama+subject:keyes&key=AIzaSyBjwlImxjGlspD3K0pXTk8ipNMS0n6LcwA ${i+1}`)
            .then((response) => {

                //convertiremos la respuesta a un objeto legible
                //porque los datos de la respuesta (response.body) están codificados
                console.log(response);

                response.json(); // response.json() es tambien una operación asincrona
            })

            .then((data) => {
                const article = document.createElement('article');
                article.innerHTML = `
             <img src="${data.sprites.front_default}" alt ="${data.name}"/>
             <h3> ${data.name}</h3>
             `
                section.appendChild(article);

            })
            .catch((err) => {})
    }
}



getBooks();