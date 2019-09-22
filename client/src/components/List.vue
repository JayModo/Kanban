<template>
  <div :id="boardList._id" class="col-3 list mr-3">
    <!-- TITLE -->
    <div class="input-group mb-3">
      <click-edit class="list-title" :initialValue="boardList.title" :placeHolder="'List Title...'"
        :enterKeyPress="titleChange">
      </click-edit>
      <div class="input-group-append">
        <div class="dropdown">
          <button class="btn btn-outline-secondary" type="button" data-toggle="dropdown">
            <i class="fas fa-caret-down"></i>
          </button>
          <div class="dropdown-menu">
            <a v-show="isAllowed(boardList.user)" class="dropdown-item" @click="deleteList">Remove List</a>
            <a class="dropdown-item">Another action</a>
            <a class="dropdown-item">Something else here</a>
          </div>
        </div>
      </div>
    </div>

    <!-- DRAGGABLE CONTAINER -->
    <draggable v-model="myList" group="myGroup" class="list-group" :move="checkMove" @start="startDrag" @add="onDrop">
      <transition-group type="transition" :name="'flip-list'">
        <task :data-list="boardList._id" class="list-group-item" v-for="task in myList" :task="task" :key="task._id">
          {{ task.description }}
        </task>
      </transition-group>
    </draggable>

    <!-- CREATE NEW TASKS -->
    <p class="new-task" @click="createNewTask">
      <i class="fas fa-tasks"> </i> New Task
    </p>
  </div>
</template>

<script>
  import Task from "./Task";
  import draggable from "vuedraggable";
  import ClickEdit from "./ClickEdit";
  export default {
    name: "list",
    props: {
      boardList: { type: Object, required: true }
    },
    components: {
      draggable,
      ClickEdit,
      Task
    },
    data() {
      return {
        editable: true,
        isDragging: false,
        delayedDragging: false
      };
    },
    methods: {
      createTaskIfNew() {
        if (this.boardList.title === '') {
          // setTimeout(() => {
          //   this.createNewTask()
          // }, 50)

          this.createNewTask()

          setTimeout(() => {
            this.$el.scrollIntoView()
            // setTimeout(() => {
            //   let title = this.$el.getElementsByClassName('list-title')[0]
            //   title.click()
            // }, 500)
          }, 100)

          setTimeout(() => {
            let title = this.$el.getElementsByClassName('list-title')[0]
            title.click()
          }, 500)
        }
      },
      checkMove(event, originalEvent) {
        // Stuff
      },
      endDrag(e) {
        // debugger
      },
      startDrag(event) { },
      onDrop(event) {
        let sourceList = event.item.dataset.list; // For documentaion
        let targetList = this.boardList._id;

        let newIndex = event.newDraggableIndex
        let task = this.$store.state.Tasks.tasks[targetList][newIndex]
        task.list = targetList

        this.$store.dispatch('moveTask', task)
      },

      createNewTask() {
        let task = {
          list: this.boardList._id,
          user: this.userId(), // userId() is a mixin. SEE main.js (client)
          board: this.boardList.board,
          description: ''
        };
        this.$store.dispatch("createNewTask", task);
      },

      titleChange(newValue) {
        let newList = this.boardList
        newList.title = newValue
        this.$store.dispatch('editList', newList)
      },
      deleteList() {
        let list = this.boardList;

        this.$store.dispatch("deleteList", list)
      },
      orderList() {
        this.list = this.list.sort((one, two) => {
          return one.order - two.order;
        });
      },
      onMove({ relatedContext, draggedContext }) {
        const relatedElement = relatedContext.element;
        const draggedElement = draggedContext.element;
        return !relatedElement;
      }
    },
    computed: {
      dragOptions() {
        return {
          animation: 0,
          group: "description",
          disabled: !this.editable,
          ghostClass: "ghost"
        };
      },
      myList: {
        get() {
          let tasks = this.$store.state.Tasks.tasks[this.boardList._id] || [];
          return tasks;
        },
        set(value) {
          let listId = this.boardList._id;

          let payload = {
            listId: listId,
            tasks: value
          };

          this.$store.commit("setTasksByListId", payload);
        }
      }
    },
    watch: {
      isDragging(newValue) {
        if (newValue) {
          this.delayedDragging = true;
          return;
        }
        this.$nextTick(() => {
          this.delayedDragging = false;
        });
      }
    },
    mounted() {
      let listId = this.boardList._id;
      this.$store.dispatch("getTasksByListId", listId);
      setTimeout(() => {
        this.createTaskIfNew()
      }, 0)

    }
  };
</script>

<style scoped>
  .list {
    padding: 10px;
    border-radius: var(--list-border-radius);
    border: solid var(--list-border-color) var(--list-border-size);
    box-shadow: 1px 2px 4px rgb(24, 109, 124);
  }

  .list-title {
    font-size: 1.618em;
  }

  .new-task {
    cursor: pointer;
    color: grey;
    float: left;
    font-size: 1.4em;
    margin-top: 3px;
    margin-left: 2px;
    margin-bottom: -5px !important;
  }

  .input-group-append {
    z-index: 0;
  }

  .input-group-append:hover {
    z-index: 1000;
  }

  .btn-outline-secondary {
    border: none !important;
  }

  .list {
    display: inline-block;
  }

  .flip-list-move {
    transition: transform 0.5s;
  }

  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }

  .list-group {
    /* border: solid var(--task-area-border-color) 1px;
    padding: 2px;
    border-radius: var(--secondary-border-radius); */
    min-height: 50px !important;
    max-height: var(--list-scroll-height);
    overflow-y: scroll;
  }

  .list-group-item {
    cursor: move;
  }

  .list-group-item i {
    cursor: pointer;
  }
</style>