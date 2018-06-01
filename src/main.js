import Vue from 'vue';

import './style.scss';

import genres from './util/genres';

new Vue({
    el: '#app',
    data: {
        genre: [],
        time: [],
    },
    methods: {
        checkFilter(category, title, checked) {
            console.log(category, title, checked);
            if (checked) {
                this[category].push(title);
            } else {
                if (this[category].includes(title)) {
                    this[category] = this[category].filter(c => c !== title);
                }
            }
        },
    },
    components: {
        'movie-list': {
            template: `
                <div id="movie-list">
                    <div class="movie" v-for="movie in filteredMovies">
                        {{ movie.title }}
                    </div>
                </div>
            `,
            data() {
                return {
                    movies: [
                        { title: 'Movie 1', genre: genres.CRIME, },
                        { title: 'Movie 2', genre: genres.COMEDY, },
                        { title: 'Movie 3', genre: genres.COMEDY, },
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
        },
        'movie-filter': {
            data() {
                return {
                    genres
                }
            },
            template: `
                <div id="movie-filter">
                    <h2>Movie filter</h2>
                    <div class="filter-group">
                        <check-filter v-for="genre in genres" :title="genre" v-on:check-filter="checkFilter"></check-filter>
                    </div>
                </div>
            `,
            methods: {
                checkFilter(category, title, checked) {
                    this.$emit('check-filter', category, title, checked);
                },
            },
            components: {
                'check-filter': {
                    data() {
                        return {
                            checked: false,
                        };
                    },
                    props: ['title'],
                    template: `
                        <div v-bind:class="{ 'check-filter': true, 'active': checked }" v-on:click="checkFilter">
                            <span class="checkbox"></span>
                            <span class="check-filter-title">
                                {{ title }}
                            </span>
                        </div>
                    `,
                    methods: {
                        checkFilter() {
                            this.checked = !this.checked;
                            this.$emit('check-filter', 'genre', this.title, this.checked);
                        },
                    },
                }
            }
        },
    },
});
