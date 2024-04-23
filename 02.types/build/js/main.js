"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['John', 1, 2];
// 여러 타입을 단언 X any 
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// stringArray.push('C'); //error
// numberArray[0] = 3; //error
// Tuple
let tuple1;
tuple1 = ['a', 1];
// tuple1 = ['a', 1, 2];
// tuple1 = [1, 'a']
let users; //2차원
users = [[1, 'John'], [2, 'Doe']];
let tuple2;
tuple2 = ['a', 1];
tuple2.push(2); //push method로 값을 넣을수는 있음
console.log(tuple2);
//tuple2.push(false) //tuple에 정의되지 않은 type은 push 불가
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = false;
//let string1: boolean = unknown; //이 방식은 불가능.
let string2 = unknown; //unknown으로 할당해주는 방법
// Object 
let obj = {};
let arr = [];
//let nul: object = null; //compiler options에 strict:null 로 해두면 에러
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title1',
    description: 'description1',
};
// Union
let union;
union = 'hi';
union = 123;
//union = [] //error
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2; //반환 없을때
func2 = function () {
    console.log('hi');
};
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
let void2 = undefined;
// void
function greeting() {
    console.log('hi');
}
const hi = greeting();
console.log(hi); // undefined
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
//never.push(1)
