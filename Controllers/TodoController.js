const todoServices = require("../Services/TodoServices");
module.exports = {
  //Search todo
  getTodo: async (req, res) => {
    //const idTodo = req.params.idTodo;
    const idTodo = 1;
    try {
      const todo = await todoServices.getTodo(idTodo);
      return res
        .status(200)
        .json({ status: 200, data: todo, message: "Todo found succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create todo
  createTodo: async (req, res) => {
    /*
    let data = {
      titleTodo: req.body.titleTodo,
      descriptionTodo: req.body.descriptionTodo,
      idTodoState: req.body.idTodoState,
      idFolder: req.body.idFolder,
      idUser: req.body.idUser,
       };
      */
    let data = {
      titleTodo: "Clean desk",
      descriptionTodo: "Clean both desk and computer once a week",
      idTodoState: "1",
      idFolder: "1",
      idUser: "1",
    };
    try {
      const todo = await todoServices.createTodo(data);
      return res
        .status(201)
        .json({ status: 201, data: todo, message: "Todo created succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Update todo
  updateTodo: async (req, res) => {
    /*
    let data = {
      titleTodo: req.body.titleTodo,
      descriptionTodo: req.body.descriptionTodo,
      idTodoState: req.body.idTodoState,
      idFolder: req.body.idFolder,
      idUser: req.body.idUser,
       };
      */
    let data = {
      titleTodo: "Clean desk",
      descriptionTodo: "Clean both desk and computer once a week",
      idTodoState: "1",
      idFolder: "1",
      idUser: "1",
    };
    try {
      const todo = await todoServices.updateTodo(data);
      return res
        .status(200)
        .json({ status: 200, data: todo, message: "Todo updated succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete todo
  deleteTodo: async (req, res) => {
    // idTodo = req.params.idTodo;
    const idTodo = 1;
    try {
      const todo = await todoServices.deleteTodo(idTodo);
      return res
        .status(200)
        .json({ status: 200, data: todo, message: "Todo deleted succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
