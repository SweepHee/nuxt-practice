export const state = () => ({
    me: null,
    list: [],
});


export const mutations = {
    getUsers(state, payload) {
        state.list = payload;
    },
    createdUser(state, payload) {
        state.me = payload;
    }
};


export const actions = {    
    getUserList({ commit }, payload) {
        this.$axios.post('/user/view', {
            email: payload.email
        }, {
            withCredentials: false,
          })
        .then((res) => {
            commit("getUsers", res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    },
    signUp({commit}, payload) {
        this.$axios.post("/user/create", {
            email: payload.email,
            name: payload.name,
            password: payload.password
        }, {
            withCredentials: true,
        })
            .then((res) => {
                console.log(res);
                // commit("createdUser", res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }
}