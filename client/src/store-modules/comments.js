import router from "../router";
import AuthService from "../AuthService";
import Axios from "axios";
import template from "./template";
import Vue from "vue";

const CONTROLLER_ROUTE = "api/tasks";

let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + CONTROLLER_ROUTE,
  timeout: 3000,
  withCredentials: true
});

export default {
  // namespaced: true,

  state: {
    comments: {
      // task_1_id: ['array of comments for task 1'],
      // task_2_id: ['array of comments for task 2']
    }
  },

  mutations: {
    setCommentsByTaskId(state, payload) {
      Vue.set(state.comments, payload.taskId, payload.comments);
    }
  },

  actions: {
    async createComment({ dispatch }, comment) {
      try {
        let taskId = comment.task
        let endPoint = `${taskId}/comments`;
        let axiosRes = await api.post(endPoint, comment);
        if (axiosRes) {
          dispatch("getCommentsByTaskId", taskId);
        }
      } catch (error) {
        console.error("store-modules/comments.js actions: createComment()");
      }
    },

    async getCommentsByTaskId({ commit }, taskId) {
      try {
        // let taskId = task._id;
        let endPoint = `${taskId}/get-comments`;
        let axiosRes = await api.post(endPoint, {});
        let comments = axiosRes.data;

        let payload = {
          comments: comments,
          taskId: taskId
        };

        commit("setCommentsByTaskId", payload);
      } catch (error) {
        console.error(
          "store-modules/comments.js actions: getCommentsByTaskId()"
        );
      }
    },

    async deleteComment({ dispatch }, comment) {
      try {
        let commentId = comment._id
        let taskId = comment.task

        let endPoint = `${taskId}/comments/${commentId}`;
        await api.delete(endPoint);

        dispatch("getCommentsByTaskId", taskId);
      } catch (error) {
        console.error("store-modules/comments.js actions: deleteComment()");
      }
    },

    async editComment({ dispatch }, comment) {
      try {
        let commentId = comment._id
        let taskId = comment.task
        let endPoint = `${taskId}/comments/${commentId}`
        await api.put(endPoint, comment)
        dispatch("getCommentsByTaskId", taskId)
      } catch (error) {
        console.error("store-modules/comments.js actions: editComment()");
      }
    }
  }
};
