const setDetails = (state, details) => {
    state.details = details
};
const resetDetails = (state) => {
    state.details = {}
};

export default {
    setDetails,
    resetDetails,
}
