const todoStateModel = require("../Domain/TodoStateModel.js");
const todoStateRepository = require("../Repositories/TodoStateRepository.js");

module.exports = {
  getTodoState: async (idTodoState) => {
    try {
      const todoState = await todoStateRepository.getTodoState(idTodoState);
      return todoState;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createTodoState: async (data) => {
    try {
      const newTodoState = await todoStateRepository.createTodoState(data);
      return newTodoState;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateTodoState: async (data) => {
    try {
      const todoState = await todoStateRepository.updateTodoState(data);
      return todoState;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteTodoState: async (idTodoState) => {
    try {
      const todoState = await todoStateRepository.deleteTodoState(idTodoState);
      return todoState;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
