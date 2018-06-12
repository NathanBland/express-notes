<template>
  <section>
    <transition-group name="el-fade-in-linear">
    <el-card v-for="note in $store.getters.notes" :key="note._id" class="box-card">
      {{note.content}}
    </el-card>
    </transition-group>
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
