<template>
  <section>
    <el-card v-for="note in $store.getters.notes" :key="note._id" class="box-card">
      {{note.content}}
    </el-card>
  </section>
</template>
<script>
export default {
  data () {
    return {
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
  }
}
</script>
