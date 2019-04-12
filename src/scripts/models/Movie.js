import axios from 'axios';
import { key, proxy } from '../config';

export default class Movie {
    constructor(id) {
        this.id = id;
    }

    async getMovie() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}&language=en-US`);
            this.title = res.data.original_title;
            this.date = res.data.release_date;
            this.description = res.data.overview;
            this.image = res.data.backdrop_path;
            // console.log(res);
        } catch(error) {
            console.log(error);
        }
    }
}