import axios from "axios";

const BASE_URL= "https://api.themoviedb.org/3";
const TMDB_TOKEN= import.meta.env.VITE_APP_TMDB_TOKEN;
const TMDB_KEY = import.meta.env.VITE_APP_TMDB_KEY;


const headers = {
    Authorization: "bearer " + TMDB_KEY,
}

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url + `?api_key=${TMDB_KEY}` , {
            headers,
            params
        })

        return data;
    } catch (err) {
        console.log(err.message);
        return err.message;
    }
}