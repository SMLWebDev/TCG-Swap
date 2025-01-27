import axios from "axios";
import { defineStore } from "pinia";


// export const usePokemonStore = defineStore("pokemon", {
//     state: () => ({
//         pokemons: [],
//         isLoading: false,
//         theQuery: '',
//     }),
//     getters: {
//         searched() {
//             return this.pokemons.filter(p => p.name.includes(this.theQuery));
//         }
//     },
//     actions: {
//         async getPokemon() {
//             this.isLoading = true;
//             const res = await axios.get('http://localhost:3000/data');
//             this.pokemons = res.data;
//             this.isLoading = false;
//         }
//     }
// })

export const usePokemonStore = defineStore("pokemon", {
    state: () => ({
        pokemons: [],
        theQuery: '',
    }),
    getters: {
        searched() {
            return this.pokemons.filter(p => p.name.includes(this.theQuery));
        }
    },
    actions: {
        async getPokemon() {
            const res = await axios.get('https://api.pokemontcg.io/v2/cards', {
                headers: {
                    'X-Api-Key': import.meta.env.VITE_POKEMON_API_HEADER,
                },
            });
            this.pokemons = res.data.data;
        }
    }
})