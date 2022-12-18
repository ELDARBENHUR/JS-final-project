// API = http://www.omdbapi.com/?apikey=[yourkey]&t=search
// key = 7eb673b9

const movieCardEl = document.querySelector(`.movie__cards`)
const movieCard = document.querySelector(`.movie__card`)
const input = document.querySelector(`.landing__search--bar`)
let title

function searchInput(event) {
    console.log(event)
    title = input.value;
    if (event.keyCode == 13) {
      searchBtn()
    }
  }

function searchBtn() {
    movieSearch(title)
}



async function movieSearch(title) {
    const movie = await fetch(`http://www.omdbapi.com/?apikey=7eb673b9&s=${title}`)
    const movieData = await movie.json()
    console.log(movieData)
    const films = movieData.Search.slice(0, 8)
    movieCardEl.innerHTML = films.map((movie) => moviesHTML(movie)).join(``)
}

function moviesHTML(movie) {
    return `<div class="movie__card">
        <figure class="poster__wrapper">
            <img src="${movie.Poster}" alt="" class="poster__img">
        </figure>
        <div class="movie__description">
            <h3 class="movie__description--title">${movie.Title}</h3>
            <h4 class="movie__description--year">Year released: ${movie.Year}</h4>
        </div>
    </div>`
}