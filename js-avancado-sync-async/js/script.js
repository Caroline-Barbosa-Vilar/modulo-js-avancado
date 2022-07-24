function boilTheWater() {
  console.log('Boil the water');

  setTimeout(() => {
    console.log('Water is ready')
    makeTheCoffee();
  }, 5000);
};

function fixCoffee() {
  console.log('Grab the coffee');
  console.log('Grab the coffee filter and the holder');
  console.log('Put the filterin the holder');
  console.log('Put the coffee in the filter');
  console.log('Place the holder on top of the cup');
};

function makeTheCoffee() {
  console.log('Making coffee');
};

boilTheWater();
fixCoffee();
