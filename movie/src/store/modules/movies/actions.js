import axios from 'axios'

import {URL, KEY, LENG} from '../../../utils/config'

const popularRequest = ({commit, state}) => {

    let api = (page = state.page) => {
        return axios.get(`${URL}/popular?api_key=${KEY}&language=${LENG}&page=${page}`)
            .then(({data}) => {
                commit('setFilmList', data.results);
                commit('setTotalPages', data.total_pages);
                commit('setTotalResults', data.total_results);
                commit('setPage');
            })
            .catch(error => {
                //console.log(error);
            });
    };

    commit('preloaderOn');
    api().then(() => {
        commit('preloaderOff')
    });
};

export default {
    popularRequest,
}
