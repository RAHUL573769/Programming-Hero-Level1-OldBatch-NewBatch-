const args = process.argv;
const time = new Date().getHours()
console.log(time)

let greetings;
if (time < 12) {

    greetings = "Good Morning";
}
else {
    greetings="Good Aftenoond"
}
console.log(args)
console.log(greetings)