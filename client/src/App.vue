<template>
  <div :style="backgroundImg" class="container-fluid page-img">
    <div id="app">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

      <nav id="navColor" class="navbar shadow rounded navbar-light bg-light justify-content-between">
        <router-link class="navbar-brand" to="/boards">
          <i id="theK" class="fab fa-kickstarter-k"></i>anban <span></span>
          <i id="theK" class="fab fa-kickstarter-k"></i>abana <span></span>
          <i id="umbrella" class="fas fa-umbrella-beach"></i>
        </router-link>

        <form class="form board-title-form" v-if="board.title && isBoardPage">
          <board-title :showModalCallBack="showModalForm" />
        </form>

        <form class="form">
          <logged-in-user class="logged-in-user" :editCallBack="showModalForm"></logged-in-user>
          <!-- </router-link> -->
        </form>
      </nav>

      <router-view />
    </div>

    <!-- <my-modal @close="showModal = false" :show-modal="showModal"></my-modal> -->
    <my-modal :closeCallBack="modalCloseCallBack" :showModal="showModal">
      <user v-if="modalUsage === MODAL_USAGE.USER" :cancelCallBack="modalCloseCallBack" />
      <collaborators v-if="modalUsage === MODAL_USAGE.COLLABORATORS" :cancelCallBack="modalCloseCallBack" />
    </my-modal>
  </div>
</template>

<script>
  import User from "./components/User"

  const MODAL_USAGE = {
    NONE: 0,
    USER: 1,
    COLLABORATORS: 2
  }
  export default {
    name: "App",
    components: {
      User
    },
    data() {
      return {
        editingUser: false,
        showModal: false,
        MODAL_USAGE: MODAL_USAGE,
        modalUsage: MODAL_USAGE.NONE
      }
    },
    computed: {
      user() {
        return this.$store.state.Auth.user
      },
      board() {
        return this.$store.state.Boards.activeBoard
      },
      isBoardPage() {
        let result = this.$route.name == "board"
        return result
      },
      backgroundImg() {
        let url = ''
        let page = this.$route.name

        switch (page) {

          case "boards":
            url = "./Images/Boards.jpg"
            break
          case "board":
            url = './Images/board.jpg'
            break
          default:
            url = "./Images/login.jpg"
        }
        // return `'${url}'`
        let result = {
          backgroundImage: `url('${url}')`
        }
        return result
      },
      isLogin() {
        let result = (this.$route.name == "login")
        return result
      }
    },
    methods: {
      showModalForm(modalUsage) {
        this.modalUsage = modalUsage
        this.showModal = true
      },
      modalCloseCallBack() {
        this.modalUsage = MODAL_USAGE.NONE
        this.showModal = false
      }
    },
  };

</script>

<style>
  :root {
    --board-list-area-height: 88vh !important;
    --list-scroll-height: calc(0.84 * var(--board-list-area-height));

    --root-color: red;
    --list-border-color: grey;
    --list-border-size: .5px;
    --list-border-radius: 10px;
    --list-background-color: var(--root-color);

    --task-area-border-color: rgba(128, 128, 128, 0.507);


    --secondary-border-radius: 7px;
    --tertiary-border-radius: 4px;
  }

  .navbar {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;

    background-image: linear-gradient(to right, rgba(87, 153, 240, 0.473), rgba(244, 239, 189, 0.541)) !important;
    border: 1px solid #77a9ff54;
    box-shadow: 2px 4px 7px rgb(18, 85, 85);
  }

  .navbar-brand {
    font-size: 2.5em;
    color: #2c3e5071 !important;
  }

  .logged-in-user {
    color: #2c3e5071 !important;
  }

  .board-title {
    text-align-last: center;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  .board-title-form {
    margin-top: 10px !important;
    margin-bottom: 0px !important;
    padding: 0px !important;
  }

  .page-img {
    min-height: 100vh !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  #theK {
    transform: rotate(-10deg);
  }



  /* The Scroll Bars */
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    margin: 0px !important;

    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(153, 153, 153, 0.548);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #418fcf;
  }


  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }



  .button-container {
    width: 100%;
    /* display: flex; */
    justify-content: center;
    align-content: center;
  }

  .btn {
    margin-left: 5px;
    margin-right: 5px;
  }
</style>