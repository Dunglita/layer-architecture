const express = require(`express`);
const cors = require("cors");
const compression = require("compression");
const controllers = require("../../Controllers/Index.js");
function getRoutes(router) {
  router //
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression());

  //User routes
  router
    .get("/user:id", controllers.user.getUser)
    .post("/newuser", controllers.user.createUser)
    .put("/user:id", controllers.user.updateUser)
    .delete("/user:id", controllers.user.deleteUser);

  //Todo routes
  router
    .get("/todo", controllers.todo.getTodo)
    .post("/todo", controllers.todo.createTodo)
    .put("/todo:id", controllers.todo.updateTodo)
    .delete("/todo:id", controllers.todo.deleteTodo);

  //Todo state routes
  router
    .get("/todostate", controllers.todoState.getTodoState)
    .post("/todostate", controllers.todoState.createTodoState)
    .put("/todostate:id", controllers.todoState.updateTodoState)
    .delete("/todostate:id", controllers.todoState.deleteTodoState);

  //Folder routes
  router
    .get("/foler", controllers.folder.getFolder)
    .post("/folder", controllers.folder.createFolder)
    .put("/folder:id", controllers.folder.updateFolder)
    .delete("/folder:id", controllers.folder.deleteFolder);
}
module.exports = getRoutes;
