<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGU4ODFkN2U0NjI3NjlhMTRjNTY1MzY0NDVhOWQyYyIsInN1YiI6IjY0ZmYxNTg1MmRmZmQ4MDBjNjJjNDA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o2TjAEj8D_SBdyWTFUpMjx0_05-mpznEny7F1pYFt74`
    }
  })
  moviesGenres.value = response.data.genres
  response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGU4ODFkN2U0NjI3NjlhMTRjNTY1MzY0NDVhOWQyYyIsInN1YiI6IjY0ZmYxNTg1MmRmZmQ4MDBjNjJjNDA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o2TjAEj8D_SBdyWTFUpMjx0_05-mpznEny7F1pYFt74`
    }
  })
  TVGenres.value = response.data.genres
})
</script>

<template>
  <h1>Gêneros de filmes</h1>
  <ul>
    <li v-for="genre in moviesGenres" :key="genre.id">
      {{ genre.name }} 
    </li>
  </ul>
  <hr />
  <h1>Gêneros de programas de TV</h1>
  <ul>
    <li v-for="genre in TVGenres" :key="genre.id">
      {{ genre.name }}
    </li>
  </ul>
</template>