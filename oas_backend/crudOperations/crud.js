const pool = require("../connect.js");

const db = {};

db.CRUD_USER_MASTER = (action, userid, name, email, pass) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "CALL CRUD_USER_MASTER(?,?,?,?,?);",
      [action, userid, name, email, pass],
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data[0]);
      }
    );
  });
};

db.CRUD_ITEM_MASTER = (action, itemid, uploadedBy, basePrice, uploadedOn,endTime,itemimgPath,itemDescription) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "CALL CRUD_ITEM_MASTER(?,?,?,?,?,?,?,?);",
      [action, itemid, uploadedBy, basePrice, uploadedOn,endTime,itemimgPath,itemDescription],
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data[0]);
      }
    );
  });
};

db.CRUD_BID_MASTER = (action, itemid, userid, price, bidTime) => {
  return new Promise((resolve, reject) => {
    pool.query(
      "CALL CRUD_BID_MASTER(?,?,?,?,?);",
      [action, itemid, userid, price, bidTime],
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data[0]);
      }
    );
  });
};

module.exports = db;
