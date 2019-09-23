<template>
  <div class="input-group board-title">
    <!-- Board Title -->
    <click-edit class="board-title" :initialValue="board.title" :placeHolder="'Board Title...'"
      :enterKeyPress="changeBoardTitle">
    </click-edit>

    <!-- Button Options: New List and Collaborators -->
    <div class="input-group-append">
      <div class="dropdown">
        <button class="btn btn-outline-secondary" type="button" data-toggle="dropdown">
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" @click="createList">New List</a>
          <a class="dropdown-item" @click="editCollaborators">Collaborators...</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  const MODAL_USAGE = {
    NONE: 0,
    USER: 1,
    COLLABORATORS: 2
  }
  export default {
    name: 'board-title',
    props: {
      showModalCallBack: { type: Function, required: true }
    },
    computed: {
      board() {
        return this.$store.state.Boards.activeBoard
      }
    },
    methods: {
      createList() {
        this.$store.dispatch("createList", this.getList());
      },
      changeBoardTitle(newValue) {
        let board = {
          _id: this.board._id,
          title: newValue
        }

        this.$store.dispatch('editBoard', board)
      },
      getList() {
        let result = {
          title: "",
          user: this.userId, // userId is a mixin in main.js (client)
          board: this.$route.params.boardId
        };
        return result;
      },
      editCollaborators() {
        this.showModalCallBack(MODAL_USAGE.COLLABORATORS)
      }
    }
  }
</script>


<style scoped>
  .btn {
    border: none !important;
  }

  .dropdown {
    cursor: pointer;
  }
</style>