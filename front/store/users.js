export const state = () => ({
    me: null,
    list: [],
});


export const mutations = {
    getUsers(state, payload) {
        state.list = payload;
    }
};


export const actions = {
    getUserList({ commit }, payload) {
        this.$axios.post('http://localhost:3085/user', {
            email: payload.email
        }, {
            withCredentials: false, /* 로컬에서할땐 true주니까 안됨 */
          })
        .then((res) => {
            commit("getUsers", res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}