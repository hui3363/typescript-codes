//오버로딩
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}
add("hello", "world");
add(1, 1);

//매개변수에 Union을 사용하는 방식 VS. 함수 오버로딩
//1. 매개변수 UNION 사용
function saySomething(word: string | string[]): string {
    if (typeof word === "string") {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something"); //return이 string으로 지정되어있기 때문에 이 경우에는 error return해주어야함
}

//2. 함수 오버로딩 방식 사용
function saySomething2(word: string): string
function saySomething2(words: string[]): string
function saySomething2(word: any): any {
    if (typeof word === "string") {
        return word;
    } else if (Array.isArray(word)) {
        return word.join(" ");
    }
    throw new Error("unable to say something");
}

saySomething(['hello', 'world']) //'hello world';
saySomething2(['hello', 'world'])
