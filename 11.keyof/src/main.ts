
//keyof : 제공된 타입의 키를 추출하여 새로운 Union 형태


// interface IUser {
//     name: string;
//     age: number;
//     address: string;
// }

// type UserKeys = keyof IUser
// "name" | "age" | "address"


const user = {
    name: "John",
    age: 20,
    address: 'seoul'
}

type UserKeys = keyof typeof user

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole


type DeviceFormatter = {
    manufacturer?: string;
    price?: number;
}