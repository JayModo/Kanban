<template>
  <div v-if="comment" class="comment">
    <user-icon class="u-icon" :user="comment.user" />
    <click-edit class="comment-edit" :initialValue="comment.description" :placeHolder="'Comment...'"
      :enterKeyPress="submitEdit">
    </click-edit>
    <div v-if="canDelete" class="delete" @click="deleteComment">
      X
    </div>
  </div>
</template>

<script>
  import ClickEdit from "./ClickEdit";
  export default {
    name: "comment",
    props: {
      comment: { type: Object }
    },
    computed: {
      canDelete() {
        let result = this.isAllowed(this.comment.user._id)
        return result
      }
    },
    components: {
      ClickEdit
    },
    methods: {
      authorInitial() {
        let result = this.comment.user.name.charAt(0).toUpperCase();
        return result;
      },
      submitEdit(newValue) {
        let comment = this.comment
        comment.description = newValue
        this.$store.dispatch('editComment', comment)
      },
      deleteComment() {
        this.$store.dispatch('deleteComment', this.comment)
      }
    }
  };
</script>

<style scoped>
  .u-icon {
    min-height: 32px !important;
    min-width: 32px !important;
    max-height: 32px !important;
    max-width: 32px !important;
  }

  .comment {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
    margin-bottom: 5px;
  }

  .delete {
    float: right;
    cursor: pointer;
    color: red;
    display: none;
  }

  .test {
    color: #a7a7a7;
  }

  .delete:hover {
    display: inline-block;
  }

  .comment-edit {
    flex-wrap: wrap;
    margin-left: 5px;
    margin-right: 5px;
    /* flex-grow: 6; */
    font-size: 0.75em;
    background-color: transparent;
    color: rgb(65, 65, 65);
  }

  .comment-edit:hover+.delete {
    display: inline-block;
  }
</style>