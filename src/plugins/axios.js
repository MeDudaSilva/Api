import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNGU4ODFkN2U0NjI3NjlhMTRjNTY1MzY0NDVhOWQyYyIsInN1YiI6IjY0ZmYxNTg1MmRmZmQ4MDBjNjJjNDA3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o2TjAEj8D_SBdyWTFUpMjx0_05-mpznEny7F1pYFt74`
  }
})

export default api