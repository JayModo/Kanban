import router from "../router";
import AuthService from "../AuthService";
import Axios from "axios"
import template from "./template";
import Vue from "vue";


const CONTROLLER_ROUTE = 'api/boards'
// EXAMPLE: const CONTROLLER_ROUTE = 'api/cars'


let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + CONTROLLER_ROUTE,
  timeout: 3000,
  withCredentials: true
});

export default {
  state: {
    boards: [],
    activeBoard: {}
  },
  mutations: {
    setActiveBoard(state, board) {
      state.activeBoard = board;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    deleteBoard(state, board) {
      state.boards = board
    }
  },
  actions: {
    async deleteBoard({ commit, dispatch }, board) {
      try {
        let boardId = board
        let endPoint = `${boardId}`;
        await api.delete(endPoint);
        dispatch("getBoards")
      } catch (error) {
        alert('store-module boards.js actions deleteBoard() ')
      }
    },
    async deleteList({ commit, dispatch }, board) {
      try {
        let boardId = `${board._id}`
        let endPoint = `${boardId}`;
        await api.delete(endPoint);

        dispatch("getBoards", boardId);
      } catch (error) {
        console.error('store-modules > lists.js > actions > deleteList()')
      }
    },

    async getBoards({ commit, dispatch, state }) {
      try {
        let axiosRes = await api.get("");
        let boards = axiosRes.data;
        commit("setBoards", boards);
        state.boards.forEach(board => {
          let boardId = board._id
          dispatch("getCollaborators", boardId)
        })
      } catch (error) {
        console.error('store-modules > boards.js > actions: getBoards()')
      }
    },
    async getBoardById({ dispatch, commit }, boardId) {
      try {
        let endPoint = `${boardId}`;
        let axiosRes = await api.get(endPoint, boardId);
        let board = axiosRes.data;
        commit("setActiveBoard", board);
      } catch (error) {
        router.push("/");
      }
    },
    async addBoard({ commit, dispatch }, boardData) {
      try {
        let axiosRes = await api.post("", boardData);
        if (axiosRes) {
          dispatch("getBoards");
        }
      } catch (error) { }
    },

    async editBoard({ commit, dispatch }, board) {
      try {
        debugger
        let endPoint = `${board._id}`
        let axiosRes = await api.put(endPoint, board)
        let edit = axiosRes.data
        commit('setActiveBoard', edit)
        dispatch('getBoards')
      } catch (error) {
        console.error('store-modules > boards.js > actions: editBoard()')
      }
    },

    async loadBoard({ dispatch }, boardId) {
      try {
        this.$store.dispatch("getBoardById", this.$route.params.boardId);
        this.$store.dispatch("getLists", this.$route.params.boardId);
        this.$store.state.List.lists.forEach(element => {
          let listId = element._id;
          this.$store.dispatch("getTasksByListId", listId);
        });
      } catch (error) {
        console.error('store-modules > boards.js > actions: loadBoard()')
      }
    }
  }
}