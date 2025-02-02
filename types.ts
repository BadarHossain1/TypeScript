type person = {
    name: string;
    age: number;
    gender?: string;
}
const person:person = {
    name: 'badar',
    age: 21,
    gender: "Male"
}

const person1:person = {
    name: 'Tuhin',
    age: 23
    // gender? is optional
}

const persons:person[] = [person,person1]