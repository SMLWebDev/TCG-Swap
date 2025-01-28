import axios from "axios";
import { defineStore } from "pinia";



export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokemons: [],
        searchResult: [],
        theQuery: '',
        page: 1,
    }),
    getters: {
    },
    actions: {
        nextPage() {
            this.page++;
        },
        async getPokemon() {
            const res = await axios.get('https://api.pokemontcg.io/v2/cards?page=' + this.page, {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_POKEMON_API_HEADER,
                },
            });
            this.pokemons = res.data.data;
            
        },
        async searchPokemon(theQuery) {
            const res = await axios.get('https://api.pokemontcg.io/v2/cards?q=name:' + theQuery, {
                header: {
                    'X-Api-Key': import.meta.env.VITE_POKEMON_API_HEADER,
                },
            });
            this.searchResult = res.data.data;
        }
    }
})



// export const usePokemonStore = defineStore("pokemon", {
//     state: () => ({
//         pokemons: new Map(),
//         searchResults: [],
//         theQuery: '',
//         page: 1,
//     }),
//     getters: {
//     },
//     actions: {
//         async getPokemon() {
//             const res = await axios.get('http://localhost:3000/data?page=2');
//             this.pokemons = res.data;
//         },
//         async searchPokemon(theQuery) {
//             const res = await axios.get('http://localhost:3000/data?name=' + theQuery)
//             this.searchResults = res.data;

//         }
//     }
// })