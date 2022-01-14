const folderServices = require("../Services/FolderServices.js");
module.exports = {
  //Search folder
  getFolder: async (req, res) => {
    //const idFolder = req.params.idFolder;
    const idFolder = 1;
    try {
      const folder = await folderServices.getFolder(idFolder);
      return res.status(200).json({
        status: 200,
        data: folder,
        message: "Folder found succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create folder
  createFolder: async (req, res) => {
    /*
    letdata = {idFolder:"1", titleFolder: req.body.titleFolder, descriptionFolder: req.body.descriptionFolder, 
    idUser: req.body.idUser,};
    */
    let data = {
      idFolder: "1",
      titleFolder: "Home Tasks",
      descriptionFolder: "My home tasks",
      idUser: "1",
    };
    try {
      const folder = await folderServices.createFolder(data);
      return res.status(201).json({
        status: 201,
        data: folder,
        message: "Folder created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Update folder
  updateFolder: async (req, res) => {
    /*
    letdata = {idFolder:"1", titleFolder: req.body.titleFolder, descriptionFolder: req.body.descriptionFolder, 
    idUser: req.body.idUser,};
    */
    let data = {
      idFolder: "1",
      titleFolder: "Home Tasks",
      descriptionFolder: "My home tasks",
      idUser: "1",
    };
    try {
      const folder = await folderServices.updateFolder(data);
      return res.status(200).json({
        status: 200,
        data: folder,
        message: "Folder updated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete folder
  deleteFolder: async (req, res) => {
    //const idFolder = req.params.idFolder;
    const idFolder = 1;
    try {
      const folder = await folderServices.deleteFolder(idFolder);
      return res.status(200).json({
        status: 200,
        data: folder,
        message: "Folder deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
