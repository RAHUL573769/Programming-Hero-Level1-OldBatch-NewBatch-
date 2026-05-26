{
    const kgToGramConverter = (input: string | number) => {
        if (typeof input === "number") {
            return input * 1000
        }
        else if (typeof input === "string") {
            const [value] = input.split(" ")
            console.log(value)
        }

    }

    const result1 = kgToGramConverter("2 kg")
    console.log(result1)


    type User = {
        name: string
        age: number

    }
    type Role = {
        role: "admin" | "user"
    }
    type UserWithRole = User & Role
    const user1: User = {

    }
    //interface:object,function
   interface IUser {
    age: number;
}

interface IUserWithRole extends IUser {
    role: "admin";
}

const interface3: IUserWithRole = {
    age: 45,
    role: "admin"
};

    console.log(interface3);
type FriendsArray = string[];

const friends: FriendsArray = ["A", "B", "C"];

interface IFriendsArray {
    [index: number]: string;
}

const friends2: IFriendsArray = ["X", "Y", "Z"];

console.log(friends);
console.log(friends2);

interface IAdd {
    (num1: number, num2: number): number;
}

const add: IAdd = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

    interface IAdd3{
        (num1:number,number2:number):number
    }

}
