import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AuthService from "./AuthService";
//Vue.config.productionTip = false

import MyModal from './components/Modal.vue'
import BoardTitle from './components/BoardTitle'
import ClickEdit from './components/ClickEdit'
import Collaborators from './components/Collaborators'
import Collaborator from './components/Collaborator'
import UserIcon from './components/UserIcon'
import LoggedInUser from './components/LoggedInUser'

Vue.component('board-title', BoardTitle)
Vue.component('click-edit', ClickEdit)
Vue.component('collaborators', Collaborators);
Vue.component('collaborator', Collaborator);
Vue.component('logged-in-user', LoggedInUser)
Vue.component('my-modal', MyModal);
Vue.component('user-icon', UserIcon)


// document.getElementById('').getElementsByClassName()

Vue.mixin({
  methods: {
    userId() {
      return this.$store.state.Auth.user._id;
    },
    isAllowed(creatorId) {
      let uid = this.$store.state.Auth.user._id;
      let boardId = this.$store.state.Boards.activeBoard._id
      let collaborators = this.$store.state.Collaborators.collaborators[boardId] || []
      let collaboratorIds = new Set(
        collaborators.map(c => {
          return c.user_id;
        })
      );
      let result = uid === creatorId || collaboratorIds.has(uid);
      return result;
    }
  }
});

async function init() {
  let user = await AuthService.Authenticate();

  if (user) {
    store.dispatch('getUsers')
    store.commit("setUser", user);
  } else {
    router.push({ name: "login" });
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}
init();
