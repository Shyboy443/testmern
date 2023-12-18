const express = require("express");
const Task = require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controlers/taskControllers");

const router =express.Router()


router.post("/", createTask);
router.get("/",getTasks);
router.get("/:id",getTask);
router.delete("/:id",deleteTask);
router.put("/:id",updateTask);

//compressing the routes to less lines of codes

//router.route("/").get(getTasks).post(createTask)
//router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)


module.exports = router