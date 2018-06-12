<template>
  <el-container>
    <el-header></el-header>
    <el-aside></el-aside>
    <el-main>
      <nuxt/>
    </el-main>
  </el-container>
</template>
<script>
export default {
  middleware: 'authenticated'
}
</script>

<style>
</style>
