<script setup lang="js">
  import { getPokemonCards } from '@/composable/pokemonAPI/getPokemonCards'
  import { useRouter } from 'vue-router'
  import { ref } from 'vue'
  import { Input } from '@/components/ui/input'
  import { Search } from 'lucide-vue-next'
  import { Pagination, PaginationEllipsis, PaginationNext, PaginationPrev, PaginationListItem, PaginationList } from "@/components/ui/pagination/index.js";

  const { data: cards, isLoading, isError, error, page, totalPages, nextPage, prevPage, setSearchTerm, isFetching } = getPokemonCards()
  const router = useRouter()

  const searchInput = ref('')

  const handleSearch = () => {
    setSearchTerm(searchInput.value)
  }

  const goToCardDetail = (id) => {
    router.push({ name: 'card-detail', params: { id } })
  }
</script>

<template>
  <div>
    <h1>Pokemon Cards (Page {{ page }} of {{ totalPages }})</h1>

    <div class="search my-5">
      <h4>Search for your favourite Pokemon</h4>
      <div class="relative w-full max-w-sm items-center">
        <Input
            class="pl-10"
            v-model="searchInput"
            @keyup.enter="handleSearch"
            type="text"
            placeholder="Search by card name"
        />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="size-6 text-muted-foreground" />
        </span>
      </div>
    </div>

    <div v-if="isLoading">Loading Posts...</div>
    <div v-else-if="isError">Error: {{ error.message }}</div>

    <div class="my-6 flex flex-row justify-center">
      <Pagination class="flex flex-row gap-10 items-center">
        <PaginationList class="pagination__border">
          <PaginationPrev
              @click="page > 1 && page--"
              :disabled="page === 1"
          />
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page > 2">
          <PaginationListItem @click="page = 1">1</PaginationListItem>
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page > 3">
          <PaginationEllipsis />
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page > 1">
          <PaginationListItem @click="page--">{{ page - 1 }}</PaginationListItem>
        </PaginationList>

        <PaginationList class="pagination__border">
          <PaginationListItem isActive>{{ page }}</PaginationListItem>
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page < totalPages">
          <PaginationListItem @click="page++">{{ page + 1 }}</PaginationListItem>
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page < totalPages - 2">
          <PaginationEllipsis />
        </PaginationList>

        <PaginationList class="pagination__border" v-if="page < totalPages - 1">
          <PaginationListItem @click="page = totalPages">{{ totalPages }}</PaginationListItem>
        </PaginationList>

        <PaginationList class="pagination__border">
          <PaginationNext
              @click="page < totalPages && page++"
              :disabled="page === totalPages"
          />
        </PaginationList>
      </Pagination>
    </div>

    <div class="cards flex flex-row flex-wrap justify-between gap-5">
      <div
          v-for="card in cards"
          :key="card.id"
          class="card"
          @click="goToCardDetail(card.id)"
      >
        <img :src="card.images.small" :alt="card.name">
      </div>
    </div>

    <div class="my-6 flex flex-row justify-center">
      <Pagination class="flex flex-row gap-10 items-center">
          <PaginationList class="pagination__border">
            <PaginationPrev
              @click="page > 1 && page--"
              :disabled="page === 1"
              />
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page > 2">
            <PaginationListItem @click="page = 1">1</PaginationListItem>
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page > 3">
            <PaginationEllipsis />
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page > 1">
            <PaginationListItem @click="page--">{{ page - 1 }}</PaginationListItem>
          </PaginationList>

          <PaginationList class="pagination__border">
            <PaginationListItem isActive>{{ page }}</PaginationListItem>
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page < totalPages">
            <PaginationListItem @click="page++">{{ page + 1 }}</PaginationListItem>
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page < totalPages - 2">
            <PaginationEllipsis />
          </PaginationList>

          <PaginationList class="pagination__border" v-if="page < totalPages - 1">
            <PaginationListItem @click="page = totalPages">{{ totalPages }}</PaginationListItem>
          </PaginationList>

          <PaginationList class="pagination__border">
            <PaginationNext
                @click="page < totalPages && page++"
                :disabled="page === totalPages"
            />
          </PaginationList>
      </Pagination>
    </div>

    <div v-if="isFetching">Loading next page...</div>
  </div>
</template>