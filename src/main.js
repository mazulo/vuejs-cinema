import Vue from 'vue';

import './style.scss';

import MovieList from './components/MovieList.vue'
import MovieFilter from './components/MovieFilter.vue'


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
        MovieList,
        MovieFilter,
    },
});
