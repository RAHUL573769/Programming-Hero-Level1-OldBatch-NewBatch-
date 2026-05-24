import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log("Middle Ware Chala");
    next();
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Champio mra anuj");
});

app.get("/ejs", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});