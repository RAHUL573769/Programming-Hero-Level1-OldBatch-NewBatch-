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



    type UserDetails={

        name: string
        age:number
    }
    type userRole = {
        role:"admin"
    }
    type UserDetailRole = UserDetails & userRole
    const rahul: UserDetailRole = {
        name:"Rahul",
        age:24,
        role:"admin"
    }
    console.log(rahul)

   interface UserFunction {
    (a1: number, a2: number): number
}

const add5: UserFunction = (a1, a2) => {
    return a1 + a2
}

console.log(add5(12, 34))
}
