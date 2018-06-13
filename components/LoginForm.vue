<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{action | capitalize}}</span>
      <el-button @click="toggleAction" style="float: right; padding: 3px 0" type="text">{{otherAction | capitalize}}</el-button>
    </div>
    <el-form @submit.native.prevent="doLogin" ref="form" :model="user" label-width="120px">
      <el-form-item label="Username">
        <el-input
          placeholder="username"
          v-model="user.username"
          required>
        </el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input
          type="password"
          placeholder="****"
          v-model="user.password"
          required>
        </el-input>
      </el-form-item>
      <transition name="el-fade-in-linear">
      <el-form-item v-if="action === 'signup'" label="Confirm Password">
        <el-input
          type="password"
          placeholder="****"
          v-model="user.password2"
          required>
        </el-input>
      </el-form-item>
      </transition>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{action | capitalize}}</el-button>
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
        password: '',
        password2: ''
      },
      action: 'login',
      otherAction: 'signup'
    }
  },
  methods: {
    doLogin () {
      console.log('componet submit event')
      this.$emit('submit', {user: this.user, action: this.action})
    },
    toggleAction () {
      const swap = this.action
      this.action = this.otherAction
      this.otherAction = swap
    }
  }
}
</script>
