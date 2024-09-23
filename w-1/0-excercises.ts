let username: string = "Username";
let age: number = 10;
let isStudent: boolean = true;
let courses: string[] = ['sdfsdf', 'fsdf'];

function multiply(a: number, b: number): number {
    return a * b;
}


interface User  {
    username: string;
    email: string;
    age?: number;
    isActive: boolean;
}

interface User {
    isAsleep: boolean;
}

function printUserInfo(user: User): void {
    console.log(user.age);
    console.log(user.email);
    console.log(user.isActive);
    console.log(user.username);
}

type Product = {
    name: string;
    price: number;
    category: string;
}

let product: Product = {
    name: "",
    price: 10,
    category: ""
}

const products: Product[] = [
    product, product
]

function getTotalPrice(products : Product[]): number{
    let totalPrice = 0
    products.forEach((product) => {
        totalPrice += product.price;
    })

    return totalPrice;
}

console.log(getTotalPrice(products));



function formatInput(value: string | number){
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    return "$" + value;
}


function isString(value: any): value is string {
    return typeof value === 'string';
}

function getLength(value: string | number): number {
    if (isString(value)) {
        return value.length;
    } else {
        return value.toString().length;
    }
}





enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled
}

function getStatusMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Your order is pending.";
        case OrderStatus.Shipped:
            return "Your order is shipped.";
        case OrderStatus.Delivered:
            return "Your order is delivered.";
        case OrderStatus.Cancelled:
            return "Your order is cancelled.";
        default:
            return "Unknown status.";
    }
}





function firstElement<T>(arr: T[]): T | null {
    return arr.length > 0 ? arr[0] : null;
}


