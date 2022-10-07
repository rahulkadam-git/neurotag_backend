const cors = require("cors");
const express = require("express");
const dbConnection = require("./db/dbConnection");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;

dbConnection();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", require("./routes/neurotag.routes"));

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
