const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then((res) => {
      console.log("db connection is successful ");
    })
    .catch((err) => {
      console.log("Error :", err.message);
    });
};

module.exports = dbConnect;
