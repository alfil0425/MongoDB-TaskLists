import express from "express";
import connect from "./db/index.js";

const app = express();

app.listen(3000, () => {
    connect().then(console.log).catch(console.error);
    console.log("server on port 3000");
}); 