const connection = require("./MySQL/ConnectionDB.js");

//Get folder
function getFolder(idFolder) {
  const sql = `SELECT * FROM FOLDER WHERE idFolder = ` + idFolder;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}
// Create folder
function createFolder(data) {
  const sql = `INSERT INTO FOLDER(titleFolder, descriptionFolder, idUser) VALUES(?, ?, ?)`;
  const titleFolder = data.titleFolder;
  const descriptionFolder = data.descriptionFolder;
  const idUser = data.idUser;

  connection.query(
    sql,
    [titleFolder, descriptionFolder, idUser],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Update folder
function updateFolder(data) {
  const sql =
    `UPDATE FOLDER SET idFolder=?, titleFolder=?, descriptionFolder=?, idUser=? 
    WHERE idFolder= ` + data.idFolder;

  function getFolderUser(data) {
    const sql = `SELECT idUser FROM FOLDER WHERE idFolder = ` + data.idFolder;
    connection.query(sql, (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    });
  }
  const idFolder = null;
  const titleFolder = data.titleFolder;
  const descriptionFolder = data.descriptionFolder;
  const idUser = getFolderUser(data);

  connection.query(
    sql,
    [idFolder, titleFolder, descriptionFolder, idUser],
    (error, result) => {
      if (error) {
        throw new Error(error);
      } else {
        return result;
      }
    }
  );
}

//Delete folder
function deleteFolder(idFolder) {
  //Call other tables delete function

  const sql = `DELETE FROM FOLDER WHERE idFolder=?`;

  const idDelFolder = idFolder;

  connection.query(sql, [idDelFolder], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Folder deleted successfully";
    }
  });
}
module.exports = {
  getFolder: getFolder,
  createFolder: createFolder,
  updateFolder: updateFolder,
  deleteFolder: deleteFolder,
};
