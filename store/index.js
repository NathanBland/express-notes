import Vuex from "vuex";
// import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: {
        isAuthenticated: false
      },
      notes: [],
      editNote: false,
      editedNote: {}
    },
    mutations: {
      setUser(state, user) {
        state.user = user;
      },
      setNotes(state, notes) {
        state.notes = notes;
      },
      setEditNote(state, status) {
        state.editNote = status;
      },
      setEditedNote(state, note) {
        state.editedNote = note;
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
      doLogin(vuexContext, loginData) {
        return this.$axios
          .$post("auth/" + loginData.action, loginData.user)
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
      },
      createNote(vuexContext, note) {
        return this.$axios
          .$post('notes', note.note)
          .then(result => {
            return result
          })
          .catch(e => console.log(e))
      },
      toggleEdit(vuexContext, note) {
        if  (note.status === 'new') {
          vuexContext.commit('setEditNote', true)
          return vuexContext.commit('setEditedNote', {})
        }
        if (note.status === 'edit') {
          vuexContext.commit('setEditNote', true)
          return vuexContext.commit('setEditedNote', note.data)
        }
        vuexContext.commit('setEditNote', false)
        return vuexContext.commit('setEditedNote', {})
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
