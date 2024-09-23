function isANumber(value: unknown) {
    return typeof value === "number";
}

console.log(isANumber(6)) // true 
console.log(isANumber('6')); // false