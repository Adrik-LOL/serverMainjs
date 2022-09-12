/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("This is the Free version of Underhoster, to get the Full version send dm to AdrianoTech#7163");
});

app.post("/", (req, res) => {
   res.send("GET " + req);
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
