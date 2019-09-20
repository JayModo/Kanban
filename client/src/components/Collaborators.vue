<template>
  <form class="collaborator-form">
    <!-- <div class="form-group">
      <label for="e-mail">Collaborator Email</label>
      <input type="text" class="form-control" id="e-mail" placeholder="e-Mail">
    </div> -->

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">Collaborator Email</span>
      </div>
      <input v-model="email" type="text" class="form-control" placeholder="e-Mail">
      <div class="input-group-append">
        <button @click="addCollaborator" v-show="isEmail" class="btn btn-outline-secondary" type="button">Add</button>
      </div>
    </div>

    <div class="collaborators">
      <collaborator v-for="collaborator in collaborators" :key="collaborator._id" :collaborator="collaborator">
      </collaborator>
    </div>

    <div class="button-container">
      <button @click="close" class="btn btn-primary">Ok</button>
    </div>
  </form>
</template>


<script>
  export default {
    name: 'collaborators',
    props: {
      cancelCallBack: { type: Function }
    },
    computed: {
      collaborators() {
        return this.$store.state.Collaborators.collaborators[this.$route.params.boardId]
      },
      users() {
        let users = this.$store.state.Auth.users
        return users
      },
      emails() {
        let users = this.users

        let emailArray = users.map(user => {
          return user.email
        })

        let usersSet = new Set(emailArray)

        return usersSet
      },
      isEmail() {
        let result = this.emails.has(this.email)
        return result
      },
      user() {
        let users = this.users

        let user = users.find(user => user.email === this.email) || {}

        return user
      }
    },
    data() {
      return {
        email: ''
      }
    },
    methods: {
      close() {
        this.cancelCallBack()
      },
      addCollaborator() {
        let collaborator = {
          board: this.$route.params.boardId,
          creator: this.userId(),
          user: this.user._id
        }
        this.$store.dispatch('addCollaborator', collaborator)
      }
    },
    mounted() {
      this.$store.dispatch('getCollaborators', this.$route.params.boardId)
    }
  }
</script>


<style scoped>
  .button-container {
    display: flex;
    justify-content: flex-end;
    align-content: center;
  }
</style>