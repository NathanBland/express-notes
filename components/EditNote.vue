<template>
  <el-form @submit.native.prevent="saveNote" ref="form" :model="note">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-tabs type="card" :value="view ? view : 'write'">
        <el-tab-pane label="Write" name="write" v-if="$store.state.user.isAuthenticated">
          <el-card class="box-card">
            <el-form-item label="Note - Supports markdown">
              <el-input
                type="textarea"
                v-model="note.content"
                :rows="10"
                required>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :disabled="loading" native-type="submit">{{action | capitalize}}</el-button>
              <el-button @click="cancelNote">Cancel</el-button>
            </el-form-item>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="View" name="view">
          <el-card class="box-card preview">
            <div slot="header" class="clearfix">
              <span>{{note.title | formatDate}}</span>
            </div>
            <span class="note-content" v-html="noteContent">
            </span>
          </el-card>
        </el-tab-pane>
        <el-tab-pane v-if="note.shortUrl && $store.state.user.isAuthenticated">
          <span slot="label"><i class="el-icon-share"></i> Share</span>
          <el-card class="box-card preview">
            <div slot="header" class="clearfix">
              <span>This Note is currently {{note.shared ? 'public' : 'private'}}.</span>
            </div>
            <span class="note-content">
              <div v-if="note.shared">
                <p>Here is your link: <a :href="'//' + link">{{link}}</a></p>
                <el-button @click="unshareNote" type="primary" icon="el-icon-error">Make Private</el-button>
              </div>
              <div v-else>
                <p>Would you like to share this note?</p>
                <el-button @click="shareNote" type="primary" icon="el-icon-share">Share</el-button>
              </div>
            </span>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="Delete" v-if="note.shortUrl && $store.state.user.isAuthenticated">
          <el-card class="box-card preview">
            <div slot="header" class="clearfix">
              <span>Delete note?</span>
            </div>
            <span class="note-content">
              <el-button @click="confirmDelete" type="danger" icon="el-icon-delete">Delete</el-button>
            </span>
          </el-card>
        </el-tab-pane>
      </el-tabs>
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
      },
      loading: false,
      link: ''
    }
  },
  props: ['noteItem', 'edit', 'view'],
  mounted () {
    console.log('props.:', this._props.noteItem)
    this.note = this._props.noteItem
    this.link = this.note.shortUrl ? `${window.location.host}${this.$router.options.base}shared/${this.note.shortUrl}` : ''
    console.log('Window', this.$router.options.base)
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
      this.loading = true
      this.$emit('submit', this.$store.state.editNote ? this.note : {title: this.note.title, content: this.note.content})
    },
    toggleAction () {
      const swap = this.action
      this.action = this.otherAction
      this.otherAction = swap
    },
    shareNote () {
      // console.log()
      this.$store.dispatch('shareNote', {...this.note, shared: true})
      .then(note => {
        this.note = note
      })
      .catch(e => {
        this.$message({
          type: 'info',
          message: 'There was a problem sharing the note'
        });
      })
    },
    unshareNote () {
      this.$store.dispatch('shareNote', {...this.note, shared: false})
      .then(note => {
        this.note = note
      })
      .catch(e => {
        this.$message({
          type: 'info',
          message: 'There was a problem making the note private'
        });
      })
    },
    cancelNote () {
      this.$store.dispatch('toggleEdit', 'false')
      return this.$router.push('/')
    },
    confirmDelete () {
      const note = this.note
      this.$confirm('This will permanently delete the note. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        confirmButtonClass: 'el-button--danger'
      }).then(() => {
        this.$store.dispatch('deleteNote', note)
        .then(data => {
          console.log('delete data', data)
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
          this.$router.push({ path: '/'})
        })
        .catch(e => {
          this.$message({
            type: 'info',
            message: 'There was a problem deleting the note'
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        });
      });
    }
  }
}
</script>
