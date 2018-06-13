<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeLink"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/">My Notes</el-menu-item>
        <el-menu-item index="/note">Compose</el-menu-item>
      </el-menu>
    </el-header>
    <el-aside>
    </el-aside>
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
  middleware: 'authenticated',
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeLink = key
      if (key === "1") {
        return this.$store.dispatch('toggleEdit', {status: 'new'})
      }
      return this.$store.dispatch('toggleEdit', 'false')
    }
  }
}

</script>

<style>
body {
  padding: 0;
  margin: 0;
}

</style>
