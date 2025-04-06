import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import axios from 'axios'
import { ref } from 'vue'

const API_URL = `https://api.pokemontcg.io/v2/cards`

export function getPokemonCards() {
    const page = ref(1)
    const limit = 25
    const totalPages = ref(0)
    const searchTerm = ref('')

    const query = useQuery({
        queryKey: () => ['cards', page.value, searchTerm.value],
        queryFn: async () => {
            const response = await axios.get(API_URL, {
                params: {
                    page: page.value,
                    pageSize: limit,
                    q: searchTerm.value ? `name:${searchTerm.value}` : undefined,
                },
                headers: {
                    'X-Api-Key': import.meta.env.VITE_POKEMON_API_KEY,
                }
            })
            const totalCount = response.data.totalCount || 0
            totalPages.value = Math.ceil(totalCount / limit)

            return response.data.data
        },
        keepPreviousData: true,
    })

    const setSearchTerm = (term) => {
        page.value = 1
        searchTerm.value = term
    }

    const nextPage = () => {
        if (page.value < totalPages.value) page.value++
    }
    const prevPage = () => {
        if (page.value > 1) page.value--
    }

    return {
        ...query,
        page,
        totalPages,
        searchTerm,
        setSearchTerm,
        nextPage,
        prevPage,
    }
}