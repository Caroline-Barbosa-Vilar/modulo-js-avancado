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

let kettlesOnTheStove = true;
let stoveIsOn = false;

boilWater(kettlesOnTheStove, stoveIsOn);
console.log('Making coffee');