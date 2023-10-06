<script setup>
// import { ref, onMounted } from 'vue'
// import axios from 'axios'

// const moviesGenres = ref([])
// const TVGenres = ref([])

// onMounted(async () => {
//   let response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=pt-BR', {
//     headers: {
//       Authorization: `Bearer AQUI_COLOCAR O TOKEN DE LEITURA DA API`
//     }
//   })
//   moviesGenres.value = response.data.genres
//   response =  await axios.get('https://api.themoviedb.org/3/genre/tv/list?language=pt-BR', {
//     headers: {
//       Authorization: `Bearer AQUI_COLOCAR O TOKEN DE LEITURA DA API`
//     }
//   })
//   TVGenres.value = response.data.genres
// })

import { ref, onMounted } from 'vue'
import api from './plugins/axios'

const moviesGenres = ref([])
const TVGenres = ref([])

onMounted(async () => {
  let response = await api.get('genre/movie/list?language=pt-BR')
  moviesGenres.value = response.data.genres
  response = await api.get('genre/tv/list?language=pt-BR')
  TVGenres.value = response.data.genres
})
</script>

<!-- <template>
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
</template> -->

<!-- <template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
    <router-view />
  </div>
</template> -->

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/filmes">Filmes</router-link>
      <router-link to="/tv">Programas de TV</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<!-- <style scoped>
nav {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
  column-gap: 2rem;
}
</style> -->

<style scoped>
header {
  height: 3rem;
  display: flex;
  background-color: black;
  color: #fff;
  font-size: 1.2rem;
  padding-left: 2rem;
}

nav {
  column-gap: 2rem;
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #fff;
}
</style>