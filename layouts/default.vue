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
        active-text-color="#ffd04b">
        <el-menu-item index="0">My Notes</el-menu-item>
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
    handleSelect () {

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
