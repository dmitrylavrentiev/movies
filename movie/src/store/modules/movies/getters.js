
const getList = (state) => {
    return state.filmList
};
const isLoading = (state) => {
    return state.isLoading
};

export default {
    getList,
    isLoading,
}
