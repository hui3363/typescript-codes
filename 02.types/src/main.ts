// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

// String
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim'];
let names2: Array<string> = ['John', 'Kim'];

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

// 여러 타입을 단언 X any 
let someArray: any[] = ['John', 1, [], {}, false];

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('C'); //error
// numberArray[0] = 3; //error


// Tuple
let tuple1: [string, number];
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a']

let users: [number, string][] //2차원
users = [[1, 'John'], [2, 'Doe']];


let tuple2: [string, number]
tuple2 = ['a', 1]
tuple2.push(2); //push method로 값을 넣을수는 있음
console.log(tuple2) 
//tuple2.push(false) //tuple에 정의되지 않은 type은 push 불가


// any
let any: any = 'abc';
any = 1;
any = [];

// unknown
let unknown: unknown = false;
//let string1: boolean = unknown; //이 방식은 불가능.
let string2: boolean = unknown as boolean; //unknown으로 할당해주는 방법

// Object 
let obj: object = {};
let arr: object = [];
//let nul: object = null; //compiler options에 strict:null 로 해두면 에러
let date: object = new Date();

const obj1: { id: number, title: string, description: string } = {
    id: 1,
    title: 'title1',
    description: 'description1',
}

// Union
let union: (string | number)
union = 'hi';
union = 123;
//union = [] //error

// Function
let func1: (arg1: number, arg2: number) => number;
func1 = function (x, y) {
    return x * y
}

let func2: () => void; //반환 없을때
func2 = function () {
    console.log('hi');
}

// Null, Undefined
//strictNullChecks: true로 되어있으면 아래 구문 모두 에러
//let number1: number = undefined
//let string9: string = null;
//let object: { a: 10, b: false } = undefined;
//let array: any[] = null;
//let undefined1: undefined = null;
//let null1: null = undefined;
//let void1: void = null;

//void에는 undefined 할당이 가능하다 (strictNullChecks 모드에서도)
let void2: void = undefined;

// void
function greeting(): void {
    console.log('hi')
}

const hi: void = greeting()
console.log(hi)  // undefined


// never
// 항상 오류를 리턴할때
function throwError(): never {
    throw new Error('error');
}

// never
// 함수가 return 값을 절대 내보내지 않을때 (무한루프 등)
function keepProcessing(): never {
    while (true) {
        console.log('hi');
    }
}

// never
// 빈 배열로 타입을 지정하면 never가 됨. 아무것도 들어오지 않는 경우
const never: [] = []
//never.push(1)