<template>
    <div id="movie-list">
        <div class="movie" v-for="movie in filteredMovies">
            {{ movie.title }}
        </div>
    </div>
</template>
<script>
    import genres from '../util/genres';
    export default {
        data() {
            return {
                movies: [
                    { title: 'The Avengers', genre: genres.CRIME, },
                    { title: 'Deadpool 2', genre: genres.COMEDY, },
                    { title: 'Interestelar', genre: genres.COMEDY, },
                ],
            };
        },
        props: ['genre', 'time'],
        methods: {
            movieGenreFilter(movie) {
                if (!this.genre.length){
                    return true
                } else {
                    return this.genre.find(genre => movie.genre === genre);
                }
            },
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.movieGenreFilter);
            },
        },
    }
</script>

