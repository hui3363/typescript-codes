// Interface
interface Animal {
	name: string;
}

interface Bear extends Animal {
	honey: boolean;
}

const bear1: Bear = {
	name: 'honey bear',
	honey: true
}

// Type alias
type Animal2 = {
	name: string;
}

type Bear2 = Animal2 & { //intersection operator
	honey: boolean;
}

const bear2: Bear2 = {
	name: 'honey bear',
	honey: true
}

//선언 병합이 가능(interface)
//animal 선언 후 아래에서 다시 선언해서 병합
//Tpe 으로는 불가능하다.
interface Animal {
	name: string;
}

interface Animal {
	honey: boolean;
}

const bear3: Animal = {
	name: 'honey bear',
	honey: true
}
