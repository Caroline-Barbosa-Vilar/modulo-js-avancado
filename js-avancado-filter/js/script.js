let people = [
  {name:'Gisele', age: 55},
  {name:'Rodrigo', age: 44},
  {name:'Carol', age: 39}
]
let peopleOverFift = people.filter(people => people.age === 55);

console.log(peopleOverFift);