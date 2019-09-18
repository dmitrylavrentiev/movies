import axios from 'axios'

import {URL, KEY, LENG} from '../../../utils/config'

const detailsRequest = ({commit}, movie_id) => {

    let api = () => {
        return axios.get(`${URL}/${movie_id}?api_key=${KEY}&language=${LENG}`)
            .then(({data}) => {
                commit('setDetails', data);
            })
            .catch(error => {
                //console.log(error);
            });
    };

    commit('resetDetails');
    commit('preloaderOn');
    api().then(() => {
        commit('preloaderOff')
    });
};

export default {
    detailsRequest,
}
