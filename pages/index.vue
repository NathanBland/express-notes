<template>
  <section :gutter="20" class="flex-row">
    <section>
      <router-link to="/"><el-button><i class="el-icon-plus"></i> New Note</el-button></router-link>
      <el-input
        placeholder="Type something"
        v-model="searchText"
        clearable
        @change="searchNotes">
        <template slot="prepend"><i class="el-icon-search"></i> Search</template>
      </el-input>
      <!-- <el-button><i class="el-icon-search"></i> Search Notes</el-button> -->
      <transition-group name="el-zoom-in-center" tag="section" :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
        <note-list v-for="note in $store.getters.notes" :key="note._id" :note="note"></note-list>
      </transition-group>
    </section>
    <nuxt-child class="compose" :key="$route.params.id"></nuxt-child>
  </section>
</template>

<script>
import NoteList from '~/components/NoteList'

export default {
  components: {
    NoteList
  },
  data () {
    return {
      searchText: ''
    }
  },
  mounted () {
    this.$store.dispatch('getNotes')
    .then(data => {
      console.log('data', data)
    })
    .catch(e => {
      console.log('e', e)
    })
  },
  methods: {
    searchNotes () {
      this.$store.dispatch('searchNotes', this.searchText)
    }
  }
}
</script>

<style>
.flex-row {
  display: flex;
  flex-flow: row nowrap;
}
.flex-row > section {
  display: flex;
  flex-flow: column nowrap;
  width: 25vw;
  flex: 0 1 auto;
  margin-right: 1em;
}
.flex-row > section > section {
  height: 85vh;
  overflow-y: auto;
}
.compose {
  flex: 1 1 auto;
}
.flex-card-title {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
}
.flex-card-title span {
  flex: 1 1 auto;
}
.flex-card-title .el-button-group {
  /* flex: 1 1 100%; */
  margin-left: auto;
  margin-left: auto;
  display: flex;
  justify-content: flex-end;
  margin-bottom: .5em;
}
.box-card .el-button-group {
  /* position: absolute;
  right: 5px;
  top: 5px; */
  /* visibility: hidden; */
  /* opacity: 0; */
  /* animation: fade-out-buttons 500ms ease-in-out forwards; */
  box-shadow: 0px 0px 1px 0px black;
}
.box-card {
  position: relative;
}
.flex-row section a > button {
  width: 100%;
  margin-bottom: .25em;
}
/* .box-card:hover .el-button-group {
  visibility: visible;
  opacity: 0;
  animation: fade-in-buttons 500ms ease-in-out forwards;
} */
@keyframes fade-in-buttons {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out-buttons {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media (max-width: 990px) {
  .flex-row {
    display: flex;
    flex-flow: row wrap;
  }
  .flex-row > section {
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    flex: 1 1 auto;
    margin-right: 1em;
  }
  .compose {
    flex: 1 1 auto;
  }
}
</style>
