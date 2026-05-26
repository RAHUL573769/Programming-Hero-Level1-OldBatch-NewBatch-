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
    const user1 = {};
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
}
//# sourceMappingURL=server.js.map