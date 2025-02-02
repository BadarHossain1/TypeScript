// TypeScript is a statically typed language, which means that it checks the types of variables at compile time.
const user:{
    name: string;
    age: number;
} = {
    name: 'badar',
    age: 23
}

const user1:{
    name: string;
    age: number;
} = {
    name: 'Tuhin',
    age: 23
}

const users:{
    name: string;
    age: number;
}[] = [user,user1]
console.log('User:', user);
console.log('User1:', user1);
console.log('Users:', users);