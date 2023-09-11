const express = require("express");
const router = express.Router();

const userQueries = require("./Controllers/user.js");
const userQueriesRouter = express.Router();

const itemQueries = require("./Controllers/item.js");
const itemQueriesRouter = express.Router();

const bidQueries = require("./Controllers/bid.js");
const bidQueriesRouter = express.Router();

userQueriesRouter.get("/getuserdetails", userQueries.getUserDetails); 
userQueriesRouter.post("/insertuser", userQueries.insertUser); 
userQueriesRouter.patch("/updateuser", userQueries.updateUser); 
userQueriesRouter.delete("/deleteuser", userQueries.deleteUser); 
userQueriesRouter.get("/authenticateuser", userQueries.authenticateUser); 

itemQueriesRouter.get("/getitemdetails", itemQueries.getItemDetails); 
itemQueriesRouter.post("/insertitem", itemQueries.insertItem); 
itemQueriesRouter.patch("/updateitem", itemQueries.updateItem); 
itemQueriesRouter.delete("/deleteitem", itemQueries.deleteItem); 

bidQueriesRouter.get("/getbiddetails", bidQueries.getBidDetails); 
bidQueriesRouter.post("/insertbid", bidQueries.insertBid); 
bidQueriesRouter.patch("/updatebid", bidQueries.updateBid); 
bidQueriesRouter.delete("/deletebid", bidQueries.deleteBid); 

router.use("/user", userQueriesRouter);
router.use("/item", itemQueriesRouter);
router.use("/bid", bidQueriesRouter);


module.exports = router;
