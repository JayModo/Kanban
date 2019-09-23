<template>
  <div class="container-fluid">
    <div id="board-lists-continer" class="scrolling-wrapper">
      <list v-if="lists" class="list" v-for="list in lists" :boardList="list"></list>
    </div>
  </div>
</template>
<script>
  import List from "../components/List";
  import ClickEdit from "../components/ClickEdit";
  export default {
    name: "board",
    components: {
      List,
      ClickEdit
    },
    computed: {
      lists() {
        return this.$store.state.Lists.lists;
      },
      tasks() {
        return this.$store.state.Tasks.tasks;
      }
    },
    mounted() {
      console.log('Board.vue mounted(): try using store-modules/boards.js actions: loadBoard()')
      this.$store.dispatch("getBoardById", this.$route.params.boardId);
      this.$store.dispatch("getLists", this.$route.params.boardId);
      this.$store.state.Lists.lists.forEach(element => {
        let listId = element._id;
        this.$store.dispatch("getTasksByListId", listId);
      });
    },

    methods: {

      getTasksByListId(listId) {
        let result = this.$store.state.Tasks.tasks[listId];
        return result;
      }
    }
  };
</script>
<style scoped>
  .scrolling-wrapper {
    margin-top: 15px !important;
    overflow-x: scroll !important;
    overflow-y: hidden !important;
    white-space: nowrap !important;
    max-height: var(--board-list-area-height);
    min-height: var(--board-list-area-height);
  }
</style>