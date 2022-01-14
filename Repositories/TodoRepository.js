const connection = require("./MySQL/ConnectionDB.js");

//Get Todo
function getTodo(idTodo) {
  const sql = `SELECT * FROM TODO WHERE idTodo = ` + idTodo;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
      return result;
    }
  });
}
// Create Todo
function createTodo(data) {
  const sql = `INSERT INTO TODO(titleTodo, descriptionTodo, idTodoState, idFolder, idUser) VALUES(?, ?, ?, ?, ?)`;
  const titleTodo = data.titleTodo;
  const descriptionTodo = data.descriptionTodo;
  const idTodoState = data.idTodoState;
  const idFolder = data.idFolder;
  const idUser = data.idUser;

  connection.query(
    sql,
    [titleTodo, descriptionTodo, idTodoState, idFolder, idUser],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Update todo
function updateTodo(data) {
  const sql =
    `UPDATE TODO SET idTodo=?, titleTodo=?, descriptionTodo=?, idTodoState=?, idFolder=?, idUser=?  WHERE idTodo=` +
    data.idTodo;

  function getTodoUser(data) {
    const sql = `SELECT idUser FROM TODO WHERE idTodo = ` + data.idTodo;
    connection.query(sql, (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    });
  }
  function getTodoState(data) {
    const sql = `SELECT idTodoState FROM TODO WHERE idTodo = ` + data.idTodo;
    connection.query(sql, (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    });
  }
  function getTodoFolder(data) {
    const sql = `SELECT idFolder FROM TODO WHERE idTodo = ` + data.idTodo;
    connection.query(sql, (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    });
  }
  const idTodo = data.idTodo;
  const titleTodo = data.titleTodo;
  const descriptionTodo = data.descriptionTodo;
  const idTodoState = getTodoState(data);
  const idFolder = getTodoFolder(data);
  const idUser = getTodoUser(data);

  connection.query(
    sql,
    [idTodo, titleTodo, descriptionTodo, idTodoState, idFolder, idUser],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Delete todo
function deleteTodo(idTodo) {
  //Call other tables delete function

  const sql = `DELETE FROM TODO WHERE idTodo=?`;

  const idDelTodo = idTodo;

  connection.query(sql, [idDelTodo], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Todo deleted successfully";
    }
  });
}
module.exports = {
  getTodo: getTodo,
  createTodo: createTodo,
  updateTodo: updateTodo,
  deleteTodo: deleteTodo,
};
