<template>
  <el-card class="box-card">
    <el-form @submit="doLogin" ref="form" :model="user" label-width="120px">
      <el-form-item label="Username">
        <el-input
          placeholder="username"
          v-model="user.username">
        </el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          placeholder="****"
          v-model="user.password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="doLogin" type="submit" class="primary el-button--primary">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    doLogin () {
      console.log('componet submit event')
      this.$emit('submit', this.user)
    }
  }
}
</script>
