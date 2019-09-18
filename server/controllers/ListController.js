import _listService from "../services/ListService";
import _taskService from "../services/TaskService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";

export default class ListController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getAll)
      .get("/:id", this.getById)

      // WE NEED TO MOVE THIS TO BoardController.
      .get("/boards/:boardId", this.getByBoardId)
      .get("/:listId/tasks", this.getTasksByListId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getAll(req, res, next) {
    try {
      //only gets lists by user who is logged in
      let data = await _listService.find({ user: req.session.uid });
      return res.send(data);
    } catch (err) {
      next(err);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await _listService.findOne({ _id: req.params.id });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getByBoardId(req, res, next) {
    try {
      let data = await _listService.find({ board: req.params.boardId });
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getTasksByListId(req, res, next) {
    try {
      let data = await _taskService.find({ list: req.params.listId }).populate({
        path: 'comments',
        populate: {
          path: 'user'
        }
      })
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.user = req.session.uid;
      let data = await _listService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      let data = await _listService.findOneAndUpdate(
        { _id: req.params.id, user: req.session.uid },
        req.body,
        { new: true }
      );
      if (data) {
        return res.send(data);
      }
      throw new Error("invalid id");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await _listService.findOneAndRemove({
        _id: req.params.id
        // user: req.session.uid
      });
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
