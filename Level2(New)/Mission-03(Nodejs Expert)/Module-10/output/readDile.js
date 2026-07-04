try {
    const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/dairy.txt");

const data = fs.readFileSync(filePath, "utf8");
console.log(data);
} catch (error) {
    console.log(error.message)

}