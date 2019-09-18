import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const state = {
    filmList: [],
    totalPages: 0,
    totalResults: 0,
    isLoading: false,
    page: 1,
};

export default {
    state,
    getters,
    mutations,
    actions,
}
