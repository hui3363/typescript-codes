
/* 매번 parameter type을 추가해주는 방법
function getArrayLength(arr: number[] | string[] | boolean[]): number {
    return arr.length;
}*/


//generic 사용
function getArrayLength<T>(arr: T[]): number {
    return arr.length;
}

const array1 = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [true, false, true];

getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);


interface Vehicle<T> {
    name: string;
    color: string;
    option: T;
}

const car: Vehicle<{ price: number }> = {
    name: 'Car',
    color: 'red',
    option: {
        price: 1000
    }
}

const bike: Vehicle<boolean> = {
    name: 'Bike',
    color: 'green',
    option: true
}

// 매개변수가 2개일때 generics 사용법
const makeArr = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array4 = makeArr<number, number>(4, 5);
const array5 = makeArr<string, string>("a", "b");

// 매개변수가 2개이고, 두번째 인자에만 기본 type 지정하기
const makeArr1 = <X, Y = string>(x: X, y: Y): [X, Y] => {
    return [x, y];
}

const array6 = makeArr1<string>("a", "b");

//generic + extends
//firstname, lastname은 필수로 사용하지만, location 등 새로운 값을 넣을수 있게 하려면
const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({ firstName: "John", lastName: "Doe", location: 'Seoul' })
makeFullName({ firstName: "John", lastName: "Doe", language: 'English' })


