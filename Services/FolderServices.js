const folderModel = require("../Domain/FolderModel.js");
const folderRepository = require("../Repositories/FolderRepository.js");

module.exports = {
  getFolder: async (idFolder) => {
    try {
      const folder = await folderRepository.getFolder(idFolder);
      return folder;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createFolder: async (data) => {
    try {
      const newFolder = await folderRepository.createFolder(data);
      return newFolder;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateFolder: async (data) => {
    try {
      const folder = await folderRepository.updateFolder(data);
      return folder;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteFolder: async (idFolder) => {
    try {
      const folder = await folderRepository.deleteFolder(idFolder);
      return folder;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
