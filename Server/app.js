const express = require("express");
const app = express();
const port = process.env.PORT || 300;

const start = () => {
  app.listen(port, (req, res) => {
    console.log(`Your app is listening at port ${port}`);
  });
};
