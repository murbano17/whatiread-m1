'use strict'
/* fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:travel`) */
function getBooks(category) {

    const section = document.querySelector(".books-list");

    fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}`)
        .then((response) => {

            return response.json()

        })
        .then((data) => {
            console.log(data);
            section.innerHTML = "";
            //crear título recomendaciones
            /*   const title = document.createElement('h4');
            title.innerHTML = `

            <h4>Our recomendations are: <h4>
            `
            section.appendChild(h4);

 */

            data.items.forEach((bookObj) => {
                const article = document.createElement('article');
                article.innerHTML = `
            
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

getBooks();