const usersList = {
  namespaced: true,
  state: {
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some income comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
      3: {
        type: "INCOME",
        value: 100,
        comment: "Income comment",
        id: 3,
      },
      4: {
        type: "OUTCOME",
        value: -50,
        comment: "Outcome comment",
        id: 4,
      },
    },
    filter: "ALL"
  },
  getters: {
    // { list } = state.list
    userBudget: ({ list }) => Object.values(list),
    currentType: ({ filter }) => filter,
  },
  mutations: {
    DELETE_USER(state, id) {
      delete state.list[id];
    },
    ADD_USER(state, user) {
      state.list[user.id] = user;
    },
    SELECT_TYPE(state, type) {
      state.filter = type;
    },
  },
  actions: {
    deleteSomeUser({ commit }, userId) {
      commit("DELETE_USER", userId);
    },
    addNewUser({ commit }, user) {
      console.log(user)
      const newUser = { ...user, id: String(Math.random()) };
      commit("ADD_USER", newUser);
    },
    selectFilter({ commit }, type) {
      commit("SELECT_TYPE", type);
    },
  },
};

  export default usersList;