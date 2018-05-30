import Vue from 'vue';

import './style.scss';

import genres from './util/genres';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `
                <div id="movie-list">
                    <div class="movie" v-for="movie in movies">
                        {{ movie.title }}
                    </div>
                </div>
            `,
            data: function() {
                return {
                    movies: [
                        { title: 'Movie 1'},
                        { title: 'Movie 2'},
                        { title: 'Movie 3'},
                    ]
                };
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
                        <check-filter v-for="genre in genres" v-bind:genre="genre"></check-filter>
                    </div>
                </div>
            `,
            components: {
                'check-filter': {
                    props: ['genre'],
                    template: `
                        <div>{{ genre }}</div>
                    `,
                }
            }
        },
    },
});
