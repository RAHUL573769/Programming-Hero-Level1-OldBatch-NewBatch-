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
}
//# sourceMappingURL=server.js.map