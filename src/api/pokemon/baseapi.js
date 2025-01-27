import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2/cards',
    timeout: 10000,
    headers: {
        'X-Api-Key': import.meta.env.VITE_POKEMON_API_HEADER,
    },
});

export default apiClient;