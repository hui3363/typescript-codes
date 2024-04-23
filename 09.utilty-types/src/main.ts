// Partial

interface Address {
    email: string;
    address: string;
}

const me: Partial<Address> = {};
const you: Partial<Address> = { email: 'john@abc.com' };
const all: Address = { email: 'john@abc.com', address: 'john' };

// Pick

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// title과 complete만 선택해서 TodoPreview에 넣기
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean Room",
    completed: false
}

// Omit  : 특정 속성만 제거하고 싶을때
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
}
// description만 제거해서 TodoPreview2에 넣기
type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
    title: "clean room",
    completed: false,
    createdAt: 124324234,
}


// Required

type User = {
    firstName: string,
    lastName?: string
}

let firstUser: User = {
    firstName: "john"
}

let secondUser: Required<User> = {
    firstName: "John" //required 이므로 lastname 필수
}



//  Record

interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred"

const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: 'persian' },
    boris: { age: 5, breed: 'maine coon' },
    mordred: { age: 16, breed: "british shorthair" }
}

// ReturnType 

type T0 = ReturnType<() => string>
type T1 = ReturnType<(s: string) => void>

function fn(str: string) {
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
const b: ReturnType<typeof fn> = true; 