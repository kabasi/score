const actions = {
    setInitialLoading: (context, payload) => {
        context.commit('setLoading', payload);
    },
};
export default actions;