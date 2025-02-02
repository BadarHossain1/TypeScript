const age = (birthYear: number):number => {
  return new Date(Date.now()).getFullYear() - birthYear;
}

const boyosh:number = age(1995);