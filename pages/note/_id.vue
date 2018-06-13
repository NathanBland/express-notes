<template>
  <el-row :gutter="20">
    <transition name="el-fade-in">
      <edit-note v-if="note.title" @submit="onSubmitted" :noteItem="note" :edit="$store.state.editNote"></edit-note>
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
  layout: 'default',
  mounted () {
    console.log('params?', this.$route.params)
    this.getNote()
  },
  methods: {
    onSubmitted(noteData) {
      this.$store.dispatch("updateNote", noteData).then((data) => {
        console.log('note:', data)
        this.$router.push('/')
      })
      .catch(e => console.log(e))
    },
    getNote() {
      this.$store.dispatch('getNote', this.$route.params.id).then(note => {
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
