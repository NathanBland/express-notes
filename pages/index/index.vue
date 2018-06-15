<template>
  <el-row :gutter="20">
    <edit-note
      @submit="onSubmitted"
      :noteItem="{}"
      :loading="loading"></edit-note>
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
      loading: false
    }
  },
  mounted () {
    console.log('[note/index]')
  },
  layout: 'default',
  methods: {
    onSubmitted(noteData) {
      this.loading = true
      console.log('note data', noteData)
      this.$store.dispatch("createNote", {...noteData}).then((data) => {
        console.log('note:', data)
        this.loading = false
        this.$store.dispatch('getNotes').then(dataset => {
          this.$router.push(`/${data._id}?display=view`)
        })
      })
      .catch(e => {
        console.log(e)
        this.loading = false
        return this.$message({
          type: 'error',
          center: true,
          message: e.response.data.msg
        });
      })
    }
  }
}
</script>

<style>
</style>
