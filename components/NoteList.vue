<template>
    <el-col :xs="24" :sm="24" :md="8" :lg="6" :xl="4">
      <el-card class="grid-content box-card" shadow="hover">
        <div slot="header" class="flex-card-title">
          <span class="card-title-text">{{note.title | formatDate}}</span>
          <el-button-group>
            <el-button type="" @click="editMode" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share" disabled></el-button>
            <el-button @click="confirmDelete(note)" type="danger" icon="el-icon-delete" ></el-button>
          </el-button-group>
        </div>
        <span class="note-content" v-html="contentMarked(note)">
        </span>
      </el-card>
    </el-col>
</template>
<script>
import Marked from 'marked'
export default {
  data () {
    return {
    }
  },
  props: {
    note: {
      required: true
    }
  },
  methods: {
    contentMarked: (note) => {
      return Marked(note.content)
    },
    editMode () {
      this.$store.dispatch("toggleEditMode", true)
      console.log('edit mode on', this._props.note._id)
      this.$router.push({ path: `/note/${this._props.note._id}` })
    },
    confirmDelete (note) {
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

<style lang="sass">
.grid-content.box-card
  margin: .5em 0em

.card-title-text

</style>
