/* ====== create node.js server with express.js framework ====== */
// dependencies
const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("This is the not so full version of Underhoster, to modify the port after downloading the server files go to 'const PORT = 3000' and change the 3000");
});

app.post("/", (req, res) => {
   res.send("GET " + req);
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
   console.log(`Server is running on PORT: ${PORT}`);
});
