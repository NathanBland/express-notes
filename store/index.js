import Vuex from "vuex";
// import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        isAuthenticated: false
      }
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
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
      setUser(vuexContext, user) {
        vuexContext.commit("setUser", user);
      },
      doLogin(vuexContext, user) {
        return this.$axios
          .$post("auth/login", user, {withCredentials: false})
          .then(result => {
            console.log('result:', result)
            return vuexContext.commit('setUser', result.user)
          })
          .catch(e => console.log(e));
      }
    },
    getters: {
      user(state) {
        return state.user;
      }
    }
  });
};

export default createStore;
