class Imc {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
  }
  calculeImc() {
    return (this.weight / this.height ** 2).toFixed(2);
  }
}

let list = [
  new Imc("Sébastien Chabal", 135, 1.7),
  new Imc("Escaladeuse", 45, 1.68),
  new Imc("The Rock", 300, 2),
  new Imc("Gontrand", 90, 1.75),
  new Imc("Colonel Clock", 200, 1.75),
  new Imc("Josi", 99, 1.55),
];

list.forEach((person) => {
  console.log(`${person.name} a un IMC de ${person.calculeImc()}`);
});
