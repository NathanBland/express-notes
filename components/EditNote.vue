<template>
  <el-form @submit.native.prevent="saveNote" ref="form" :model="note" label-width="120px">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form-item label="Title">
          <el-input
            placeholder="ToDo items"
            v-model="note.title">
          </el-input>
        </el-form-item>
      </div>
      <el-form-item label="Note">
        <el-input
          type="textarea"
          v-model="note.content">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">{{action | capitalize}}</el-button>
        <el-button @click="cancelNote">Cancel</el-button>
      </el-form-item>
    </el-card>
  </el-form>
</template>
<script>
export default {
  data () {
    return {
      note: {
        content: '',
        title: ''
      }
    }
  },
  props: ['noteItem'],
  computed: {
    action () {
      return this.$store.state.editNote && this.$store.state.editedNote.title ? 'update' : 'create'
    }
  },
  methods: {
    saveNote () {
      console.log('componet submit event')
      this.$emit('submit', {note: this.note, action: this.action})
    },
    toggleAction () {
      const swap = this.action
      this.action = this.otherAction
      this.otherAction = swap
    },
    cancelNote () {
      this.$store.dispatch('toggleEdit', 'false')
      return this.$router.push('/')
    }
  }
}
</script>
