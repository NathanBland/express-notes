import Vuex from "vuex";
// import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        isAuthenticated: false
      },
      notes: []
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
      setNotes(state, notes) {
        state.notes = notes;
      }
    },
    actions: {
      // nuxtServerInit(vuexContext, context) {
      //   return axios.get('https://nuxt-blog.firebaseio.com/posts.json')
      //     .then(res => {
      //       const postsArray = []
      //       for (const key in res.data) {
      //         postsArray.push({ ...res.data[key], id: key })
      //       }
      //       vuexContext.commit('setPosts', postsArray)
      //     })
      //     .catch(e => context.error(e));
      // },

      // setUser(vuexContext, user) {
      //   vuexContext.commit("setUser", user);
      // },

      userCheck(vuexContext) {
        return this.$axios
          .$post('auth/me')
          .then(result => {
            console.log('result:', result)
            return vuexContext.commit('setUser', result)
          })
          .catch(e => new Error(e))
      },
      doLogin(vuexContext, user) {
        return this.$axios
          .$post("auth/login", user)
          .then(result => {
            console.log('result:', result)
            return vuexContext.commit('setUser', result.user)
          })
          .catch(e => console.log(e));
      },
      getNotes(vuexContext) {
        return this.$axios
          .$get('notes')
          .then(result => {
            console.log('notes:', result)
            return vuexContext.commit('setNotes', result)
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      user(state) {
        return state.user;
      },
      notes(state) {
        return state.notes
      }

    }
  });
};

export default createStore;
