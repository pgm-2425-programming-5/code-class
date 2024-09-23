let message: string = "Hello World!";
let count : number = 5;

type errorCode = number | string;

let errorCode1: errorCode = 404;
let errorCode2: errorCode = "Dit is een fout";

function  add(a : number, b: number): number {
    return a + b;
}

console.log(add(2,3));
