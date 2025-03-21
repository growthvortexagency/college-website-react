const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const applicationRoutes = require("./routes/applicationRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/application", applicationRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
