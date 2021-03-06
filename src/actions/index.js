import axios from 'axios';

const API_KEY = '69c8f1c92d786d0e8398df3dd043df88';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url);
    // console.log(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}