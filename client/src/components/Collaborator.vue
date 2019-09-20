<template>
  <div class="collaborator">
    <span>{{ collaborator.user.name }}</span>
    <div @click="removeCollaborator" v-if="isAllowed(collaborator.creator)" class="close-button">X</div>
  </div>
</template>


<script>
  export default {
    name: 'collaborator',
    props: {
      collaborator: { type: Object }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      removeCollaborator() {
        let collaborator = {
          _id: this.collaborator._id,
          board: this.collaborator.board
        }

        this.$store.dispatch('removeCollaborator', collaborator)
      }
    }
  }
</script>


<style scoped>
  .collaborator {
    padding: 5px;
    border: solid rgba(128, 128, 128, 0.513) 1px;
    border-radius: 4px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.37);
    margin-bottom: 8px;
  }

  .close-button {
    color: red;
    font-weight: bold;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    float: right;
  }
</style>