const connection = require("./MySQL/ConnectionDB.js");

//Get todo state
function getTodoState(idTodoState) {
  const sql = `SELECT * FROM TODOSTATE WHERE idTodoState = ` + idTodoState;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
      return result;
    }
  });
}
// Create todo state
function createTodoState(data) {
  const sql = `INSERT INTO TODOSTATE(nameTodoState, modificationDateTodoState) VALUES(?, ?)`;
  const nameTodoState = data.nameTodoState;
  const modificationDateTodoState = data.modificationDateTodoState;

  connection.query(
    sql,
    [nameTodoState, modificationDateTodoState],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Update todo state
function updateTodoState(data) {
  const sql =
    `UPDATE TODOSTATE SET nameTodoState=?, modificationDateTodoState=?  WHERE idTodoState=` +
    data.idTodoState;

  const nameTodoState = data.nameTodoState;
  const modificationDateTodoState = data.modificationDateTodoState;

  connection.query(
    sql,
    [nameTodoState, modificationDateTodoState],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Delete todo state
function deleteTodoState(idTodoState) {
  //Call other tables delete function

  const sql = `DELETE FROM TODOSTATE WHERE idTodoState=?`;

  const idDelTodoState = idTodoState;

  connection.query(sql, [idDelTodoState], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Todo state deleted successfully";
    }
  });
}
module.exports = {
  getTodoState: getTodoState,
  createTodoState: createTodoState,
  updateTodoState: updateTodoState,
  deleteTodoState: deleteTodoState,
};
