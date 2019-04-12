import axios from 'axios';
import { key } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/search/movie?query=${this.query}&language=en-US&include_adult=false&api_key=${key}`);
            this.result = res.data.results;
        }

        catch (error) {
            alert(error);
        }
    }
}