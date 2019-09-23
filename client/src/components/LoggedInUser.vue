<template>
  <div class="logged-in-user dropdown" v-show="!isLogin">
    <h2>{{ user.name }}</h2>
    <div data-toggle="dropdown">
      <user-icon class="u-icon" :user="user" />
    </div>
    <div class="dropdown-menu">
      <a class="dropdown-item" @click="editUser">Edit</a>
      <a class="dropdown-item">
        <router-link id="log-out" to="/login">Logout</router-link>
        <!-- logout <i class="fas fa-sign-out-alt"></i> -->
      </a>
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
    name: 'logged-in-user',
    props: {
      editCallBack: { type: Function, required: true }
    },
    computed: {
      user() {
        return this.$store.state.Auth.user
      },
      isLogin() {
        let result = (this.$route.name == "login")
        return result
      }
    },
    methods: {
      editUser() {
        this.editCallBack(MODAL_USAGE.USER)
      }
    }
  }
</script>


<style scoped>
  .logged-in-user {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
  }

  .u-icon {
    cursor: pointer;
    min-height: 64px !important;
    min-width: 64px !important;
    max-height: 64px !important;
    max-width: 64px !important;
  }

  a {
    cursor: pointer;
  }

  h2 {
    margin-top: 10px;
    margin-right: 10px;
  }
</style>