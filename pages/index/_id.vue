<template>
  <el-row :gutter="20">
    <transition name="el-fade-in">
      <edit-note
        v-if="note.title"
        @submit="onSubmitted"
        :noteItem="note"
        :view="viewState"
        :edit="$store.state.editNote"
        :loading="loading"></edit-note>
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
      note: {},
      loading: false
    }
  },
  computed: {
    viewState() {
      return this.$route.query.display
    }
  },
  layout: 'default',
  mounted () {
    console.log('params?', this.$route.params)
    this.getNote()
  },
  methods: {
    onSubmitted(noteData) {
      this.loading = true
      this.$store.dispatch("updateNote", noteData).then((data) => {
        this.loading = false
        console.log('note:', data)
        this.$router.push(`/${data._id}?display=view`)
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
    },
    getNote() {
      this.$store.dispatch('getNote', this.$route.params.id).then(note => {
        console.log('note?', note)
        this.note = note
      })
      .catch(e => console.log('err', e))
    }
  }
}
</script>

<style>
</style>
