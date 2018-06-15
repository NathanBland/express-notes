<template>
    <section @click="editMode" class="note-list">
      <router-link :to="{ path: `/${this._props.note._id}` }">
        <el-card class="grid-content box-card" shadow="never">
          <div slot="header" class="flex-card-title">
            <span class="card-title-text">{{note.title | formatDate}}</span>
          </div>
          <span class="note-content" v-html="contentMarked(note)">
          </span>
        </el-card>
      </router-link>
    </section>
</template>
<script>
import Marked from 'marked'
export default {
  data () {
    return {
    }
  },
  props: {
    note: {
      required: true
    }
  },
  methods: {
    contentMarked: (note) => {
      return Marked(note.content)
    },
    editMode () {
      this.$store.dispatch("toggleEditMode", true)
      console.log('edit mode on', this._props.note._id)
      // this.$router.push({ path: `/${this._props.note._id}` })
    },

  }
}
</script>

<style lang="sass">
.grid-content.box-card
  margin: .25em 0em

.note-list .box-card:hover
  cursor: pointer

.note-list > a
  text-decoration: none

.note-list > .nuxt-link-exact-active .box-card
  background-color: #3a8ee61a
</style>
