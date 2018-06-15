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
      editedNote: {},
      search: ''
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
      },
      setSearch(state, search) {
        state.search = search
      }
    },
    actions: {
      searchNotes(vuexContext, searchText) {
        return vuexContext.commit('setSearch', searchText)
      },
      toggleEditMode(vuexContext, state) {
        return vuexContext.commit('setEditNote', state)
      },
      userCheck(vuexContext) {
        return this.$axios
          .$post('auth/me')
          .then(result => {
            console.log('result:', result)
            return vuexContext.commit('setUser', result)
          })
          // .catch(e => new Error(e))
      },
      doLogin(vuexContext, loginData) {
        return this.$axios
          .$post("auth/" + loginData.action, loginData.user)
          .then(result => {
            console.log('result:', result)
            return vuexContext.commit('setUser', result.user)
          })
          // .catch(e => reject(e));
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
      getSharedNote(vuexContext, id) {
        return this.$axios
          .$get('notes/shared/' + id)
          .then(result => {
            // console.log('notes', result)
            return result
            // return vuexContext.commit('setNotes', result)
          })
          .catch(e => console.log(e))
      },
      getNote(vuexContext, id) {
        return this.$axios
          .$get('notes/' + id)
          .then(result => {
            // console.log('notes', result)
            return result
            // return vuexContext.commit('setNotes', result)
          })
          .catch(e => console.log(e))
      },
      createNote(vuexContext, note) {
        return this.$axios
          .$post('notes', note.note ? note.note : note)
          .then(result => {
            // vuexContext.dispatch('getNotes')
            return result
          })
      },
      shareNote(vuexContext, note) {
        return this.$axios
        .$put('notes/' + note._id, note)
        .then(result => {
          // vuexContext.dispatch('getNotes')
          console.log('note sharable?', result)
          return result
        })

      },
      updateNote(vuexContext, note) {
        return this.$axios
          .$put('notes/' + note._id, note)
          .then(result => {
            // vuexContext.dispatch('getNotes')
            return result
          })
          .catch(e => console.log(e))
      },
      deleteNote(vuexContext, note) {
        return this.$axios
          .$delete('notes/' + note._id)
          .then(result => {
            vuexContext.dispatch('getNotes')
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
        if (state.search.length > 0) {
          const notes = state.notes.filter(note => {
            console.log((note.content.indexOf(state.search) > 1) || (note.title.indexOf(state.search) > 1))
            return (note.content.indexOf(state.search) > 1) || (note.title.indexOf(state.search) > 1)
          })
          return notes.reverse()
        }
        return state.notes.length > 0 ? state.notes.reverse() : []
      }
    }
  });
};

export default createStore;
