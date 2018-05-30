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
                        <check-filter v-for="genre in genres" :title="genre"></check-filter>
                    </div>
                </div>
            `,
            components: {
                'check-filter': {
                    data() {
                        return {
                            checked: false,
                        };
                    },
                    props: ['title'],
                    template: `
                        <div v-bind:class="{ 'check-filter': true, 'active': checked }" v-on:click="checked = !checked">
                            <span class="checkbox"></span>
                            <span class="check-filter-title">
                                {{ title }}
                            </span>
                        </div>
                    `,
                }
            }
        },
    },
});
