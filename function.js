var age = function (birthYear) {
    return new Date(Date.now()).getFullYear() - birthYear;
};
var boyosh = age(1995);
