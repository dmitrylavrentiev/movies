import Vue from 'vue'
import Vuex from 'vuex'
import movies from './modules/movies/'
import film from './modules/film/'

Vue.use(Vuex);

const createStore = initialState => {
    return new Vuex.Store({
        state: initialState,
        modules: {
            movies,
            film,
        },
    })
};

export default createStore
