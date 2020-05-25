const express = require("express");
const path = require('path')


const app = express();
app.use(express.static("./"));


// routes )to serve the static HTML files
app.get('/', function(req, res) {
  res.sendfile('index.html');
});


app.listen(3000, () => {
    console.log("listening on port 3000");
});