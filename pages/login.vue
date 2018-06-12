<template>
  <section class="container">
    <login-form @submit="onSubmitted"></login-form>
  </section>
</template>

<script>
import LoginForm from '~/components/LoginForm.vue'

export default {
  components: {
    LoginForm
  },
  mounted () {
    this.$store.dispatch('userCheck').then(() => {
      this.$router.push('/')
    })
  },
  layout: 'login',
  methods: {
    onSubmitted(userData) {
      this.$store.dispatch("doLogin", userData).then(() => {
        this.$router.push('/')
      })
      .catch(e => console.log(e))
    }
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
