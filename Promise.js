console.log('person1 shows ticket');
console.log('person2 shows ticket');

const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
  setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = new Promise((resolve, reject) => {
  setTimeout(() => resolve('popcorn'), 3000);
});

const addButter = new Promise((resolve, reject) => {
  setTimeout(() => resolve('butter'), 3000);
});

const bringColdDrink = new Promise((resolve, reject) => {
  setTimeout(() => resolve('coldDrink'), 3000);
});

person3PromiseToShowTicketWhenWifeArrives
  .then((ticket) => {
    console.log(`got the ${ticket}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I am hungry"`);
    
    return getPopcorn;
  })
  .then((popcorn) => {
    console.log(`Husband: here is ${popcorn}`);
    console.log(`Husband: we should go in now`);
    console.log(`Wife: "I don't like popcorn without butter!"`);
    
    return addButter;
  })
  .then((butter) => {
    console.log(`added ${butter}`);
    console.log(`Husband: do you need anything else`);
    console.log(`Wife: what about cold drinks`);
    console.log(`Husband: ok darling wait I'll bring you cold drinks`);
    return bringColdDrink;
  })
  .then((coldDrink) => {
    
    
    console.log(`Husband: here is your , anything else darling`);
    console.log(`Wife: let's go we are going to miss the preview`);
    console.log(`Husband: thanks for the reminder *grin*`);
    
    return coldDrink;
  })
  .then((t) => console.log(`person4 shows tickets`))
  .catch((error) => console.error(error));

console.log('person4 shows ticket');