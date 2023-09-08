const express = require("express");
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());


const routes = require("./routes");

app.use("/api", routes);


app.listen(3000, () => {
  console.log("Listening on port 3000.");
});