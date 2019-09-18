const setFilmList = (state, filmList) => {
    state.filmList = [...state.filmList, ...filmList]
};
const setTotalPages = (state, total) => {
    state.totalPages = total
};
const setTotalResults = (state, total) => {
    state.totalResults = total
};
const preloaderOn = state => {
    state.isLoading = true
};
const preloaderOff = state => {
    state.isLoading = false
};
const setPage = state => {
    state.page++
};

export default {
    setFilmList,
    setTotalPages,
    setTotalResults,
    preloaderOn,
    preloaderOff,
    setPage,
}
