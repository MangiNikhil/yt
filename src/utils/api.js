import axios from 'axios';
const BASE_URL='https://youtube138.p.rapidapi.com';

const options = {
    params: {hl: 'en',gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '2957ba8290mshe3ba81ec061378bp199704jsn33051d86dc28',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi= async (url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    return data;  
}