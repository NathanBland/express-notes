<template>
  <el-row :gutter="20">
    <edit-note @submit="onSubmitted" :noteItem="{}"></edit-note>
  </el-row>
</template>

<script>
import EditNote from '~/components/EditNote'

export default {
  components: {
    EditNote
  },
  mounted () {
    console.log('[note/index]')
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
