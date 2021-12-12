const express = require("express");
const dotenv = require("dotenv");
const gitRouter = require("./routes/github");
const morgan = require("morgan");
dotenv.config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'))

app.use(express.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET');
    next();
});

app.use("/api", gitRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
