// Utilizando o Rest dessa forma, o parâmetro clients será transformado em um array.
const showList = (company, ...clients) => {
    console.log(company);
    console.log(clients);
}

showList("Go Dev", "XRP", "ONE", "SIL");

// Spread: separa os itens do array
const number = [1,25,32,467,574,6221,756,7668,8249];

console.log(Math.max(...number));

// Utilizando o Spread para converter o nodeList em Array.
const itens = document.querySelectorAll("li");

[...itens].map(item => {
    console.log(item);
})

console.log(itens);

const car = { color: "Blue", doors: 4, year: 2021};

// Dessa forma é criado uma referência ao invés de "clonar";
const cloneCar = car;

// Não é criado uma referência e todas as propriedades do objeto car são atribuídas  ao cloneCar2;
// Também é possível adicionar novas propriedades;
const cloneCar2 = { ...car, turbo: true };

console.log(cloneCar);
console.log(cloneCar2);

// Shallow Clone é utilizado para "clonar" as propriedades dos objetos.
// Dessa forma não é clonado os métodos.
class Transport {
    constructor() {
        this.land = true;
    }

    floor() {
        console.log("Walked");
    }
}

class Car extends Transport {
    constructor(color, doors) {
        super();
        this.color = color;
        this.doors = doors;
    }
}

const newCar = new Car("Blue", 4);

const cloneNewCar = { ...newCar };

console.log(newCar);
console.log(cloneNewCar);