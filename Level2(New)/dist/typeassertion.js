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
}
//# sourceMappingURL=typeassertion.js.map