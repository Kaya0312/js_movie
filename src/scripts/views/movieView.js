import { elements } from './base';

export const clearMovie = () => {
    elements.movieDetail.innerHTML = "";
}

export const renderMovie = movie => {
    const markup = 
    `
        <div class="modal-window">
            <div class="detail_image">
                <div>
                    <img src="https://image.tmdb.org/t/p/w500/${movie.image}" alt=${movie.title} onerror="this.onerror=null;this.src='https://cdn.hands.net/images/4571253480919-1.jpg';" />
                </div>
            </div>
            <div class="detail_description">
                <p class="detail_description_title">${movie.title}</p>
                <p class="detail_description_date">${movie.date}</p>
                <p class="detail_description_txt">${movie.description}</p>
            </div>               
        </div>
    `;
    elements.movieDetail.insertAdjacentHTML('beforeend', markup);
}