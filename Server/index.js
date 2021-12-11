const express = require("express");
const dotenv = require("dotenv");
const gitRouter = require("./routes/github");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", gitRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
