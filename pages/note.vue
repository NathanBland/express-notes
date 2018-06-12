<template>
  <edit-note @submit="onSubmitted"></edit-note>
</template>

<script>
import EditNote from '~/components/EditNote'

export default {
  components: {
    EditNote
  },
  layout: 'default',
  methods: {
    onSubmitted(noteData) {
      this.$store.dispatch("createNote", noteData).then((data) => {
        console.log('note:', data)
        this.$router.push('/')
      })
      .catch(e => console.log(e))
    }
  }
}
</script>

<style>
</style>
