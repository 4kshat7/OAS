const queries = require("../crudOperations/crud.js");

const getUserDetails = async (req, res) => {
  const userid = req.query.userid;
  const email = req.query.email;
  const name = req.query.name;
  const pass = req.query.pass;

  try {
    const result = await queries.CRUD_USER_MASTER(
      "R",
      userid,
      name,
      email,
      null
    );

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {     
    res.status(404).json(error);
  }
};

const authenticateUser = async (req, res) => {
  const userid = req.body.userid;
  const email = req.body.email;
  const name = req.body.name;
  const pass = req.body.pass;

  try {
    const result = await queries.CRUD_USER_MASTER("A", null, null, email, pass);
    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const insertUser = async (req, res) => {
  const userid = req.body.userid;
  const email = req.body.email;
  const name = req.body.name;
  const pass = req.body.pass;

  try {
    const result = await queries.CRUD_USER_MASTER("C", null, name, email, pass);

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const updateUser = async (req, res) => {
  const userid = req.body.userid;
  const email = req.body.email ? req.body.email : null;
  const name = req.body.name ? req.body.name : null;
  const pass = req.body.pass ? req.body.pass : null;

  try {
    const result = await queries.CRUD_USER_MASTER(
      "U",
      userid,
      email,
      name,
      pass
    );

    if (result) {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(404).json(error);
  }
};

const deleteUser = async (req, res) => {
  const userid = req.body.userid;

  try {
    const result = await queries.CRUD_USER_MASTER(
      "D",
      userid,
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
  getUserDetails,
  insertUser,
  updateUser,
  deleteUser,
  authenticateUser,
};
