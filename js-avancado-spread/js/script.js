let people1 = ['Gisele','Rodrigo','Carol'];
let people2 = ['Girlene','César','Fábio'];

people1 = [...people1,...people2];

console.log(people1);

//cloning an object

let people3 = {name: 'Carol', age:39};

let cloneObject = {...people3};
console.log(people3)
console.log(cloneObject)