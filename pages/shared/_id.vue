<template>
  <el-row :gutter="20">
    <transition name="el-fade-in">
      <edit-note v-if="note" :noteItem="note" :edit="$store.state.editNote" :view="true"></edit-note>
      <div v-else>
        <h1>No note found</h1>
      </div>
    </transition>
  </el-row>
</template>

<script>
import EditNote from '~/components/EditNote'

export default {
  components: {
    EditNote
  },
  data () {
    return {
      note: {}
    }
  },
  layout: 'shared',
  mounted () {
    console.log('params?', this.$route.params)
    this.getNote()
  },
  methods: {
    // onSubmitted(noteData) {
    //   this.$store.dispatch("updateNote", noteData).then((data) => {
    //     console.log('note:', data)
    //     this.$router.push('/')
    //   })
    //   .catch(e => console.log(e))
    // },
    getNote() {
      this.$store.dispatch('getSharedNote', this.$route.params.id).then(note => {
        console.log('note?', note)
        this.note = note
      })
      .catch(e => console.log('err', e))
    }
  },
  computed: {
    // note: () => {

    // }
  }
}
</script>

<style>
</style>
