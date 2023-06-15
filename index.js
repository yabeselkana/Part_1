const express = require("express");
require('dotenv').config()
const app = express();
const mainRouter = require("./src/routes/index");
const port = 3000;
app.use(express.json());

app.use("/", mainRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  // console.log(process.env.PGUSER);
  // console.log(process.env.PGHOST);
  // console.log(process.env.PGDATABASE);
  // console.log(process.env.PGPASSWORD);
  // console.log(process.env.PGPORT);
});
