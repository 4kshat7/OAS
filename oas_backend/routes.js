const express = require("express");
const router = express.Router();

const userQueries = require("./Controllers/user.js");
const userQueriesRouter = express.Router();

const itemQueries = require("./Controllers/item.js");
const itemQueriesRouter = express.Router();

const bidQueries = require("./Controllers/bid.js");
const bidQueriesRouter = express.Router();

userQueriesRouter.get("/getuserdetails", userQueries.getUserDetails); //query params
userQueriesRouter.post("/insertuser", userQueries.insertUser); //body params
userQueriesRouter.patch("/updateuser", userQueries.updateUser); //body params
userQueriesRouter.delete("/deleteuser", userQueries.deleteUser); //query params
userQueriesRouter.get("/authenticateuser", userQueries.authenticateUser); //body params

itemQueriesRouter.get("/getitemdetails", itemQueries.getItemDetails); //query params
itemQueriesRouter.post("/insertitem", itemQueries.insertItem); //body params
itemQueriesRouter.patch("/updateitem", itemQueries.updateItem); //body params
itemQueriesRouter.delete("/deleteitem", itemQueries.deleteItem); //query params

bidQueriesRouter.get("/getbiddetails", bidQueries.getBidDetails); //query params
bidQueriesRouter.post("/insertbid", bidQueries.insertBid); //body params
bidQueriesRouter.patch("/updatebid", bidQueries.updateBid); //body params
bidQueriesRouter.delete("/deletebid", bidQueries.deleteBid); //query params

router.use("/user", userQueriesRouter);
router.use("/item", itemQueriesRouter);
router.use("/bid", bidQueriesRouter);


module.exports = router;
