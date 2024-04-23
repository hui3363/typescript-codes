class Car {
    mileage = 0;
    price = 100;
    color = 'white';

    drive() {
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

interface Part {
    seats: number;
    tire: number;
}

// impements는 상속이 아니라 그 형태로 만들어주는것
// Car를 implements하면 Car에 있는 모든 속성을 갖고 있어야함
class Ford implements Car, Part {
    mileage = 1;
    price = 2;
    color = 'white';
    seats = 2;
    tire = 3;

    drive() {
        return 'drive!';
    }

    brake() {
        return 'brake!';
    }
}

const myFordCar = new Ford();

//keyof : 제공된 타입의 키를 추출하여 새로운 Union 형태
const user = {
    name: 'john',
    age: 20,
    address: 'seoul'
}

type UserKeys = keyof typeof user;