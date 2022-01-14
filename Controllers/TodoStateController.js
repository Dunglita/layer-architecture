const todoStateServices = require("../Services/TodoStateServices.js");
module.exports = {
  //Search todoState
  getTodoState: async (req, res) => {
    //const idTodoState = req.params.idTodoState;
    const idTodoState = 1;
    try {
      const todoState = await todoServices.getTodoState(idTodoState);
      return res.status(200).json({
        status: 200,
        data: todoState,
        message: "Todo state found succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create todoState
  createTodoState: async (req, res) => {
    /*
    let data = {nameTodoState: req.body.nameTodoState, 
    modificationDateTodoState: req.body.modificationDateTodoState,};
    */
    let data = {
      nameTodoState: "In Progress",
      modificationDateTodoState: "2021-12-12 05:05:05",
    };
    try {
      const todoState = await todoServices.createTodoState(data);
      return res.status(201).json({
        status: 201,
        data: todoState,
        message: "Todo state created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Update todoState
  updateTodoState: async (req, res) => {
    /*
    let data = {nameTodoState: req.body.nameTodoState, 
    modificationDateTodoState: req.body.modificationDateTodoState,};
    */
    let data = {
      nameTodoState: "In Progress",
      modificationDateTodoState: "2021-12-12 05:05:05",
    };
    try {
      const todoState = await todoServices.updateTodoState(data);
      return res.status(200).json({
        status: 200,
        data: todoState,
        message: "Todo state updated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete todoState
  deleteTodoState: async (req, res) => {
    // idTodoState = req.params.idTodoState;
    const idTodoState = 1;
    try {
      const todoState = await todoServices.deleteTodoState(idTodoState);
      return res.status(200).json({
        status: 200,
        data: todoState,
        message: "Todo state deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
