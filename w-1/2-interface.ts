interface Lion {
    name: string;
    maneColor: string;
    sex: "M" | "F";
    age: number;
    isInRelation: boolean;
    isLeader?: boolean;
    readonly birthPlace: string;
}

const lionOne: Lion = {
    name: "Mufasa",
    maneColor: "brown",
    sex: "M",
    age: 10,
    isInRelation: false,
    birthPlace: "Zoo",
}

lionOne.age = 12;


console.log(lionOne)


