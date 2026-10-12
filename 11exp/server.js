const express = require("express");
const app = express();

app.get("/add", (req, res) => {
    res.json({ result: Number(req.query.a) + Number(req.query.b) });
});

app.get("/multiply", (req, res) => {
    res.json({ result: Number(req.query.a) * Number(req.query.b) });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
