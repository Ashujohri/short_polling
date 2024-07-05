const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

let data = "Initial Data";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/getData", (req, res) => {
  res.send({ data });
});

// Use POST/PUT to update for the example purpose I am using GET
app.get("/updateData", (req, res) => {
  data = "Updated data";
  res.send({ data });
});

app.listen(PORT, () => {
  console.log("Server running at PORT ", PORT);
});
