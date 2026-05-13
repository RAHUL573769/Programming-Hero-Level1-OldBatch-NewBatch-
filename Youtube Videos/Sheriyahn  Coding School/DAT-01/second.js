// programming language

// File System Operations in Node.js
// writeFile
// appendFile
// copyFile
// rename
// unlink

const fs = require("fs");

// 1. Create and write file
fs.writeFile("hey.txt", "hey hello ", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});

// 2. Append data to file
fs.appendFile("hey.txt", "hey hello1 ", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended successfully");
    }
});

// 3. Rename file
fs.rename("hey.txt", "hello.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});

// 4. Copy file
fs.copyFile("hello.txt", "./copy2/copy.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File copied successfully");
    }
});

// 5. Delete file
// fs.unlink("hello.txt", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File deleted successfully");
//     }
// });