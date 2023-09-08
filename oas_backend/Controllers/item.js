const queries = require("../crudOperations/crud.js");

const getItemDetails = async (req, res) => {
  const itemid = req.query.itemid;
  const uploadedBy = req.query.uploadedBy;
  const basePrice = req.query.basePrice;
  const uploadedOn = req.query.uplodedOn;
  const endTime = req.query.endTime;
  const itemimgPath = req.query.itemimgPath;
  const itemDescription = req.query.itemDescription;



  try {

    const result = await queries.CRUD_ITEM_MASTER(
      "R",
      itemid,
      uploadedBy,
      basePrice,
      uploadedOn,
      endTime,
      itemimgPath,
      itemDescription
    );


    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const insertItem = async (req, res) => {
  const uploadedBy = req.body.uploadedBy;
  const basePrice = req.body.basePrice;
  const uploadedOn = req.body.uploadedOn;
  const endTime = req.body.endTime;
  const itemimgPath = req.body.itemimgPath;
  const itemDescription = req.body.itemDescription;
  try {

    const result = await queries.CRUD_ITEM_MASTER(
      "C",
      null,
      uploadedBy,
      basePrice,
      uploadedOn,
      endTime,
      itemimgPath,
      itemDescription
    );

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateItem = async (req, res) => {
  const itemid = req.body.itemid;
  const uploadedBy = req.body.uploadedBy ? req.body.uploadedBy : null;
  const basePrice = req.body.basePrice ? req.body.basePrice : null;
  const uploadedOn= req.body.pass ? req.body.uploadedOn : null;

  const endTime = req.body.endTime ? req.body.endTime : null;
  const itemimgPath = req.body.itemimgPath? req.body.itemimgPath : null;
  const itemDescription= req.body.itemDescription ? req.body.itemDescription : null;

  try {
  
    const result = await queries.CRUD_ITEM_MASTER(
      "U",
      itemid,
      uploadedBy,
      basePrice,
      uploadedOn,
      endTime,
      itemimgPath,
      itemDescription
    );


    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteItem = async (req, res) => {
  const itemid = req.body.itemid;

  try {
    const result = await queries.CRUD_ITEM_MASTER(
      "D",
      itemid,
      null,
      null,
      null,
      null,
      null,
      null
    );


    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports = {
  getItemDetails,
  insertItem,
  updateItem,
  deleteItem,
};
