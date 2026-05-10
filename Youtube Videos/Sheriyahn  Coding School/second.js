// programming language


//

// writeFile
    //appendFile
    // copyfile
    // rename
// unlink


const fs = require("fs")
fs.writeFile("hey.txt", "hey helllo ", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("done")
    }
})

fs.appendFile("hey.txt", "hey helllo1 ", (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("done")
    }
})


fs.rename("hey.txt", "hello.txt", function (err) {

    if (err) {
        console.log(err)
    }
    else {
        console.log("Hiiiiiiii")
    }
})