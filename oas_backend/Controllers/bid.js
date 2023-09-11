const queries = require("../crudOperations/crud.js");


const getBidDetails = async (req, res) => {

    const itemid = req.query.itemid;
    const userid = req.query.userid;
    const price = req.query.price;
    const bidTime = req.query.bidTime;

  try {
    const result = await queries.CRUD_BID_MASTER(
      "R",
      itemid,
      userid,
      price,
      bidTime
    );



    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const insertBid = async (req, res) => {
    const itemid = req.body.itemid;
    const userid = req.body.userid;
    const price = req.body.price;
    const bidTime = req.body.bidTime;

  try {

    const result = await queries.CRUD_BID_MASTER("C", itemid, userid,price, bidTime);


    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateBid = async (req, res) => {
    const itemid = req.body.itemid ? req.body.itemid : null;
  const userid = req.body.userid ? req.body.userid:null;
  const price = req.body.price ? req.body.price : null;
  const bidTime = req.body.bidTIme ? req.body.bidTime : null;

  try {

    const result = await queries.CRUD_BID_MASTER(
      "U",
      itemid, userid,price, bidTime
    );


    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteBid = async (req, res) => {
  const itemid = req.body.itemid;
  const userid = req.body.userid;

  try {
    const result = await queries.CRUD_BID_MASTER(
      "D",
      itemid,
      userid,
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
  getBidDetails,
  insertBid,
  updateBid,
  deleteBid,
};
