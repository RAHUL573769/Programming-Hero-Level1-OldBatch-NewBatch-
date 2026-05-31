"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const kgToGramConverter = (input) => {
        if (typeof input === "number") {
            return input * 1000;
        }
        else if (typeof input === "string") {
            const [value] = input.split(" ");
            console.log(value);
        }
    };
    const result1 = kgToGramConverter("2 kg");
    console.log(result1);
    const interface3 = {
        age: 45,
        role: "admin"
    };
    console.log(interface3);
    const friends = ["A", "B", "C"];
    const friends2 = ["X", "Y", "Z"];
    console.log(friends);
    console.log(friends2);
    const add = (a, b) => {
        return a + b;
    };
    console.log(add(10, 20));
    const rahul = {
        name: "Rahul",
        age: 24,
        role: "admin"
    };
    console.log(rahul);
    const add5 = (a1, a2) => {
        return a1 + a2;
    };
    console.log(add5(12, 34));
    //generic
    const friends5 = ["my4"];
    const rollNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    //dybanic genelearlized
    const friendsGeneric = ["Mrx", "Mrb"];
    console.log("fiendsGeneric", friendsGeneric);
    console.log("fiendsGeneric", friendsGeneric);
    const friendsGeneric1 = [];
    const poorDeveloper = {
        name: "Rahul Rudra",
        salary: 1500,
        smartWatch: {},
        bike: "Yamaha"
    };
    const richDeveloper = {
        name: "Rahul1",
        salary: 3456,
        smartWatch: {
            name: "Yamaha"
        },
        bike: {
            name: "Yamakax"
        }
    };
    console.log("Poooer Developer", poorDeveloper);
    const genericFunction = (value) => {
        return value;
    };
}
//# sourceMappingURL=server.js.map