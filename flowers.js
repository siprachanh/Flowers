const flowers = [
  {
    id: 1,
    color: "White",
    species: "Rose",
    price: 0.9,
  },
  {
    id: 2,
    color: "Red",
    species: "Tulip",
    price: 1.1,
  },
];

// for (const flower of flowers) {
//   console.log(flowers);
//   console.log(flower.price);
//   console.log(`Price of #${flower.id} flower is ${flower.price}`);
// }

const addFlower = (flowerObject) => {
  /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */

  const lastIndex = flowers.length - 1;
  const currentLastFlower = flowers[lastIndex];
  const maxId = currentLastFlower.id;
  const idForNewFlower = maxId + 1;

  flowerObject.id = idForNewFlower;
  flowers.push(flowerObject);
};
const orchid = {
    color: "purple",
    species: "orchid",
    price: 0.99
}
 addFlower(orchid) 
 console.log(flowers)

const findExpensiveFlowers = () => {
  let expensiveFlowers = [];
  for (const flower of flowers) {
    if (flower.price >= 1.0) {
      const flowerFound = flower;
      expensiveFlowers.push(flowerFound);
    }

    
    // Do not change this code
  }
  console.log(expensiveFlowers) 
  return expensiveFlowers; 
  
 // console.log(`Price of # ${flower.id} flower is ${flower.price}`);
};
// Do not change this code

findExpensiveFlowers() 
/*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */
// modify to only display product details if a condition is true.

// Do not touch this code
module.exports = {
  findExpensiveFlowers,
  addFlower,
};
