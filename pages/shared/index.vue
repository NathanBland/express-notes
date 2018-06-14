<template>
  <el-row :gutter="20">
  </el-row>
</template>

<script>
import EditNote from '~/components/EditNote'

export default {
  components: {
    EditNote
  },
  mounted () {
    console.log('[shared/index]')
    this.$router.push({path: '/'})
  },
  layout: 'shared',
  methods: {
  }
}
</script>

<style>
</style>
