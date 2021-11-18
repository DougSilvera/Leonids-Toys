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

const modelKit = {
  id: 3,
  Name: "Ford Tri Motor airplane",
  InStock: true,
  price: 9.99,
  quantity: 12,
  sold: 12,
  weight: 2.4
}

const remoteControlTruck ={
  id: 4,
  Name: "Traxxas Rustler",
  InStock: true,
  price: 249.99,
  quantity: 10,
  sold: 5,
  weight: 10.2
}
toys =[];

toys.push(woodenHorse , teddyBear, remoteControlTruck, modelKit)

console.log(toys);

console.log(woodenHorse.price)

for( const toy of toys) {
  console.log(`price is $${toy.price}`)
}

for (toy of toys){
  console.log(toy.Name
    )
}

for (const toy of toys) {
toy.price = (toy.price*.05)+toy.price  

}


for (toy of toys) {
  console.log(`The ${toy.Name} price is $${toy.price} and there are ${toy.quantity} in stock`)
}

const toyToFind = 2

for (toy of toys) {
  if (toy.id === toyToFind)
  console.log(`The ${toy.Name} price is $${toy.price} and there are ${toy.quantity} in stock`)
}