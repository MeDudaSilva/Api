<script setup>
import { ref, onMounted } from 'vue'
import api from '@/plugins/axios'
import Loading from 'vue-loading-overlay'
import useGenreStore from '@/stores/genre';

const genreStore = useGenreStore();

const isLoading = ref(false);
const getGenreName = (id) => genres.value.find((genre) => genre.id === id).name
const genres = ref([])
const tvShows = ref([]);
const formatDate = (date) => new Date(date).toLocaleDateString('pt-BR')

onMounted(async () => {
  isLoading.value = true;
  await genreStore.getAllGenres('tvShow');
  isLoading.value = false;
});

const listTvShows = async (genreId) => {
  isLoading.value = true;
  const response = await api.get('discover/tv', {
    params: {
      with_genres: genreId,
      language: 'pt-BR'
    }
  });
  tvShows.value = response.data.results
  isLoading.value = false;
};

</script>
<template>
  <h1>Séries de TV</h1>
  <ul class="genre-list">
    <li v-for="genre in genreStore.genres" :key="genre.id" @click="listTvShows(genre.id)" class="genre-item">
      {{ genre.name }}
    </li>
  </ul>
  <loading v-model:active="isLoading" is-full-page />

  <div class="tv-show-list">
    <div v-for="tvShow in tvShows" :key="tvShow.id" class="tv-show-card">
      <img :src="`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`" :alt="tvShow.name" />
      <div class="tv-show-details">
        <p class="tv-show-title">{{ tvShow.name }}</p>
        <p class="tv-show-release-date">{{ formatDate(tvShow.release_date) }}</p>
        <p class="tv-show-genres">
          <span v-for="genre_id in movie.genre_ids" :key="genre_id" @click="listTvShows(genre_id)">
            {{ genreStore.getGenreName(genre_id) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tv-show-genres {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
}

.tv-show-genres span {
  background-color: #748708;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: bold;
}

.tv-show-genres span:hover {
  cursor: pointer;
  background-color: #455a08;
  box-shadow: 0 0 0.5rem #748708;
}

.tv-show-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tv-show-card {
  width: 15rem;
  height: 30rem;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 0.5rem #000;
}

.tv-show-card img {
  width: 100%;
  height: 20rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem #000;
}

.tv-show-details {
  padding: 0 0.5rem;
}

.tv-show-title {
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3rem;
  height: 3.2rem;
}

.genre-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  margin-bottom: 2rem;
}

.genre-item {
  background-color: #387250;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  color: #fff;
}

.genre-item:hover {
  cursor: pointer;
  background-color: #4e9e5f;
  box-shadow: 0 0 0.5rem #387250;
}
</style>
