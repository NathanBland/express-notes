<template>
  <el-row :gutter="20" class="flex-row">
    <transition-group name="el-zoom-in-center" class="">
      <note-list v-for="note in $store.getters.notes" :key="note._id" :note="note"></note-list>
    </transition-group>
  </el-row>
</template>

<script>
import NoteList from '~/components/NoteList'

export default {
  components: {
    NoteList
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
}
</script>

<style>
.flex-row > span {
  display: flex;
  flex-flow: row wrap;
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
  position: absolute;
  right: 5px;
  top: 5px;
  visibility: hidden;
  opacity: 0;
  animation: fade-out-buttons 500ms ease-in-out forwards;
  box-shadow: 0px 0px 1px 0px black;
}
.box-card {
  position: relative;
}
.box-card:hover .el-button-group {
  visibility: visible;
  opacity: 0;
  animation: fade-in-buttons 500ms ease-in-out forwards;
}
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
</style>
