const age = (birthYear: number):number => {
  return new Date(Date.now()).getFullYear() - birthYear;
}

const boyosh:number = age(1995);

console.log(boyosh);

const user = (person: {name: string, age: number}):string => {
  return `Name: ${person.name}, Age: ${person.age}`;
}

const person = {
  name: 'Sohan',
  age: 25
}

console.log(user(person));