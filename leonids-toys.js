const woodenHorse = {
  id: 1,
  Name: "Pokey the wooden horse",
  InStock: true,
  price: 49.99,
  quantity: 10,
  sold: 20,
  weight: 5,
};

const teddyBear = {
  id: 2,
  Name: "Buddy Bear",
  InStock: true,
  price: 19.99,
  quantity: 5,
  sold: 56,
  weight: 1.2,
};

toys =[];

toys.push(woodenHorse , teddyBear)

console.log(toys);

console.log(woodenHorse.price)

for( const toy of toys) {
  console.log(`price is $${toy.price}`)
}