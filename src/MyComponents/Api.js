import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather'
const API_KEY ='34bbd69c6167dc4f87a537b4400011c5'

export const getData = async (city,country) => {
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=matrix`)
}
