<template>
  <div class="container-fluid">
    <div class="boards">
      <h4> Welcome to your personal Kabana</h4>
      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required>
        <input type="text" placeholder="description" v-model="newBoard.description">
        <button class="btn btn-primary" type="submit">Create Board</button>
      </form>
      <div v-for="board in boards" :boards="board" :key="board._id">
        <button v-if="checkPrivliges(board)" class="btn btn-danger" v-on:click="deleteBoard(board._id)"><i
            class="far fa-trash-alt"></i>
        </button>
        <router-link v-if="checkPrivliges(board)" id="boardTitles" :to="{name: 'board', params: {boardId: board._id}}">
          <h4> {{board.title}} </h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "boards",
    mounted() {
      console.log('Boards.vue mounted(): Try using promises so this can run in the background')
      this.$store.dispatch("getBoards");
      this.$store.state.Boards.boards.forEach(board => {
        let boardId = board._id
        this.$store.dispatch("getCollaborators", boardId)
      })
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },

    computed: {
      boards() {
        return this.$store.state.Boards.boards;
      },
      collaborators() {
        return this.$store.state.Collaborators.collaborators
      },
      collaboratorCount() {
        return Object.keys(this.collaborators).length
      }
    },

    methods: {
      deleteBoard(boardId) {
        this.$store.dispatch('deleteBoard', boardId)
      },
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      checkPrivliges(board) {
        let uid = this.$store.state.Auth.user._id;
        let creatorId = board.user
        let boardId = board._id
        let collaborators = this.collaborators[boardId] || []
        let collaboratorIds = new Set(
          collaborators.map(c => {
            return c.user._id;
          })
        );
        let result = uid === creatorId || collaboratorIds.has(uid);
        return result;
      }
    }
  };
</script>
<style scoped>
  #boardTitles {
    color: black;
  }

  h4 {
    margin-top: 3px;
  }

  /* .boards {
    background-image: url('https://images.unsplash.com/photo-1446923201163-edc1e4b2d85f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
    min-height: 91vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  } */
</style>