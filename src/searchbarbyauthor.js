'use strict'
/* fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:travel`) */


/* const buttonSearchBar = document.querySelector('#buttonsearch'); */
const formulario = document.querySelector('#formulario-real')
console.log(formulario)

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const formulario = document.querySelector('#formulario').value;
    console.log(formulario);
    getBooksByAuthor(formulario);
});

function getBooksByAuthor(formulario) {
    console.log('hola!')
    console.log(formulario)

    const section = document.querySelector(".books-list");

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${formulario.toLowerCase()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            section.innerHTML = "";
            data.items.forEach((bookObj) => {
                const article = document.createElement('article');
                article.innerHTML = `
                
            </div>
                <div class="coverbook">
                    <img src="${bookObj.volumeInfo.imageLinks.thumbnail}" alt="${bookObj.volumeInfo.title}"/>
                    </div>
                    <div class="infobook">
                    <h3>${bookObj.volumeInfo.title}</h3>
                    <h4>Author/s:</h4>
                    <p>${bookObj.volumeInfo.authors}</p>
                    <h4>Publisher:</h4>
                    <p>${bookObj.volumeInfo.publisher}</p>
                    <a href="#popup1"> <button class="sinopsis-button" >Sinopsis</button></a>
                    </div>
                    <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2>Sinopsis</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        <p>${bookObj.volumeInfo.description}</p>
                        
                    </div>
                </div>

                    </div>
                    <div>
       
                        `;
                section.appendChild(article);
            })

        })
        .catch((err) => {})
}



/* 

const buttonSearchBar = document.querySelector('#buttonsearch');
buttonSearchBar.addEventListener('click', () => {
    const formulario = document.querySelector('#formulario').value;
    getBooksByTitle(formulario);
});

function getBooksByTitle(formulario) {
    console.log('hola!')
    console.log(formulario)

    const section = document.querySelector(".books-list");

    fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${formulario.toLowerCase()}`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            section.innerHTML = "";
            data.items.forEach((bookObj) => {
                const article = document.createElement('article');
                article.innerHTML = `
                
            </div>
                <div class="coverbook">
                    <img src="${bookObj.volumeInfo.imageLinks.thumbnail}" alt="${bookObj.volumeInfo.title}"/>
                    </div>
                    <div class="infobook">
                    <h3>${bookObj.volumeInfo.title}</h3>
                    <h4>Author/s:</h4>
                    <p>${bookObj.volumeInfo.authors}</p>
                    <h4>Publisher:</h4>
                    <p>${bookObj.volumeInfo.publisher}</p>
                    <a href="#popup1"> <button class="sinopsis-button" >Sinopsis</button></a>
                    </div>
                    <div id="popup1" class="overlay">
                    <div class="popup">
                        <h2>Sinopsis</h2>
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                        <p>${bookObj.volumeInfo.description}</p>
                        
                    </div>
                </div>

                    </div>
                    <div>
       
                        `;
                section.appendChild(article);
            })

        })
        .catch((err) => {})
 */