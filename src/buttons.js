'use strict'

//hacemos una variable del botón
//a cada botón pasarle la función getBooks con la categoria para que te devuelva los resultados de esa categoria

//arquitectura
const architectureButton = document.querySelector('.architecture')
architectureButton.addEventListener('click', () => getBooks("architecture"));

//cooking
const cookingButton = document.querySelector('.cooking')
cookingButton.addEventListener('click', () => getBooks("cooking"));

//art
const artButton = document.querySelector('.art')
artButton.addEventListener('click', () => getBooks("art"));

//design
const designButton = document.querySelector('.design')
designButton.addEventListener('click', () => getBooks("design"));

//drama
const dramaButton = document.querySelector('.drama')
dramaButton.addEventListener('click', () => getBooks("drama"));

//education
const educationButton = document.querySelector('.education')
educationButton.addEventListener('click', () => getBooks("education"));

//fiction
const fictionButton = document.querySelector('.fiction')
fictionButton.addEventListener('click', () => getBooks("fiction"));

//history
const historyButton = document.querySelector('.history')
historyButton.addEventListener('click', () => getBooks("history"));

//music
const musicButton = document.querySelector('.music')
musicButton.addEventListener('click', () => getBooks("music"));

//photography
const photographyButton = document.querySelector('.photography')
photographyButton.addEventListener('click', () => getBooks("photography"));

//poetry
const poetryButton = document.querySelector('.poetry')
poetryButton.addEventListener('click', () => getBooks("poetry"));

//science
const scienceButton = document.querySelector('.science')
scienceButton.addEventListener('click', () => getBooks("science"));

//travel
const travelButton = document.querySelector('.travel')
travelButton.addEventListener('click', () => getBooks("travel"));



/* 
//searchbar
const searchButton = document.querySelector('.searchbook');
const inputValue = document.querySelector('.searchbooksbar').value;

inputValue.addEventListener('click', () => getBooksbyAuthor(inputValue))
 */
/* 
<input class="searchbooksbar" type="search" name="searchbyauthorortitle" id="search-bar" placeholder="Search">
<button class="searchbook" for="search">Search</button> */