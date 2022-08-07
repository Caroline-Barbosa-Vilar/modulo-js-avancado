let boilWater = (kettlesOnTheStove, stoveIsOn) => {
  return new Promise((resolve, reject) => {

    if(kettlesOnTheStove && stoveIsOn) {
      console.log('Start boiling water');
      resolve();
    } else {
      console.log('You must turn on the stove and put the kettle on');
      reject();
    }
  });
};

let makingCoffee = (boiledWater) => {
  return new Promise((resolve) => {
    console.log('Coffee is ready!');
    resolve(true);
  })
}

let havingCoffee = (coffeeMade) => {
  return new Promise((resolve) => {
    console.log('Finish my coffee!');
    resolve(true);
  })
}

let washTheCup = (coffeeDrinked) => {
  return new Promise((resolve) => {
    console.log('Finish washing the cup');
    resolve(true);
  })
}

let kettlesOnTheStove = true;
let stoveIsOn = false;

async function starToMakingCoffee() {
  try {
    const waterReady = await boilWater(kettlesOnTheStove, stoveIsOn);
    const coffeeReady = await boiledWater(waterReady);
    const coffeeFinished = await coffeeDrinked(coffeeReady);
    const washedCup = await washTheCup(coffeeFinished);
      // if (washedCup) console.log('Coffee Ritual concludes');
  } catch(error) {
    console.log(error);
  } finally {
    console.log('Coffee Ritual concludes');
  }
}
starToMakingCoffee();