const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./config/database");
const todoRoutes = require("./routes/todos");

dbConnect();
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is start ${PORT}`);
});

app.use("/api/v1", todoRoutes);

app.get("/", (req, res) => {
  res.send(`<h1> This is a homepage </h1>`);
});
