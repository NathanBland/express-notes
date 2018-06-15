<template>
  <el-container>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data () {
    return {
      activeLink: "0"
    }
  },
  methods: {
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    //   this.activeLink = key
    //   if (key === "1") {
    //     return this.$store.dispatch('toggleEdit', {status: 'new'})
    //   }
    //   return this.$store.dispatch('toggleEdit', 'false')
    // }
  }
}

</script>

<style>
@import url('~/assets/inter-ui/inter-ui.css');

body {
  padding: 0;
  margin: 0;
  font-family: 'Inter UI', sans-serif;
}

</style>
