import "./../styles/style.scss";
import { elements } from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';
import Movie from './models/Movie';
import * as movieView from './views/movieView';
import { key, proxy } from './config';

const state = { };

window.onload = async function(){
    const query = "toy";

        state.search = new Search(query);
        console.log("New Search", state);

        try {
            await state.search.getResults();
            searchView.clearInput();
            searchView.renderResults(state.search.result);
        } catch (err) {
            console.log(err);
        }
}

const controlSearch = async () => {
    const query = searchView.getInput();

    if(query) {
        state.search = new Search(query);
        console.log("New Search", state);

        try {
            searchView.clearDefaultMovies();
            await state.search.getResults();
            searchView.clearInput();
            searchView.renderResults(state.search.result);
        } catch (err) {
            console.log(err);
        }
    }
}

elements.searchForm.addEventListener('submit', e => {
    event.preventDefault();
    controlSearch();
});

const controlMovie = async () => {
    const id = window.location.hash.replace('#', '');
    console.log("Hash", id);

    if(id) {

        state.movie = new Movie(id);

        try {
            movieView.clearMovie();
            await state.movie.getMovie();
            console.log("state.movie", state.movie);
            movieView.renderMovie(state.movie);


        } catch (err) {
            console.log(err);
        }
    }
}

window.addEventListener('hashchange', controlMovie);
// window.addEventListener('load', controlMovie);

// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovie));