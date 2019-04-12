import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearDefaultMovies = () => {
    elements.searchRes.innerHTML = "";
}

export const clearInput = () => {
    elements.searchInput.value = '';
};

const renderMovie = result => {
    const markup = 
    `
        <li>
            <a class="movie_item" href="#${result.id}">
                <div class="movie_image">
                    <div>
                        <img src="https://image.tmdb.org/t/p/original/${result.backdrop_path}" onerror="this.onerror=null;this.src='https://cdn.hands.net/images/4571253480919-1.jpg';" >              
                    </div>
                </div>
                <div class="movie_description">               
                    <p class="movie_description_title">${result.original_title}</p>
                    <p class="movie_description_date">${result.release_date}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchRes.insertAdjacentHTML('beforeend', markup);
};

export const renderResults = (movies) => {

    movies.forEach(renderMovie);

};