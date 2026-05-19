const express = require("express");

const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req, res, next) => {
    console.log("Middle Ware Chala");
    next(); // move to next middleware/route
});

app.get("/", (req, res) => {
    res.send("Champio mra anuj");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});