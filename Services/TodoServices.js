const todoModel = require("../Domain/TodoModel.js");
const todoRepository = require("../Repositories/TodoRepository.js");

module.exports = {
  getTodo: async (idTodo) => {
    try {
      const todo = await todoRepository.getTodo(idTodo);
      return todo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createTodo: async (data) => {
    try {
      const newTodo = await todoRepository.createTodo(data);
      return newTodo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateTodo: async (data) => {
    try {
      const todo = await todoRepository.updateTodo(data);
      return todo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteTodo: async (idTodo) => {
    try {
      const todo = await todoRepository.deleteTodo(idTodo);
      return todo;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
