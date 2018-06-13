<template>
  <el-form @submit.native.prevent="saveNote" ref="form" :model="note">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <el-form-item label="Title">
            <el-input
              placeholder="ToDo items"
              v-model="note.title">
            </el-input>
          </el-form-item>
        </div>
        <el-form-item label="Note - Supports markdown">
          <el-input
            type="textarea"
            v-model="note.content"
            :rows="10"
            required>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">{{action | capitalize}}</el-button>
          <el-button @click="cancelNote">Cancel</el-button>
        </el-form-item>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-card class="box-card preview">
        <div slot="header" class="clearfix">
            <span>{{note.title | formatDate}}</span>
          </div>
        <span class="note-content" v-html="noteContent">
        </span>
      </el-card>
    </el-col>
  </el-form>
</template>
<script>
import Marked from 'marked'
export default {
  data () {
    return {
      note: {
        content: '',
        title: ''
      }
    }
  },
  props: ['noteItem', 'edit'],
  mounted () {
    console.log('props:', this._props.noteItem)
    this.note = this._props.noteItem
  },
  computed: {
    action () {
      return this.$store.state.editNote && this._props.noteItem.title ? 'update' : 'create'
    },
    noteContent () {
      if (this.note.content || this._props.noteItem.content) {
        return Marked(this.note.content || this._props.noteItem.content)
      } else {
        return ''
      }
    }
  },
  methods: {
    saveNote () {
      console.log('componet submit event')
      this.$emit('submit', this.note)
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
