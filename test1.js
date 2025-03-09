// 33-2 Intro to JSON, JSON Structure, parse, stringify

const person = {
    name : "hena",
    age : "20",
    friends : ["jamil", "murad"]
}

const newPerson = JSON.stringify(person)
console.log(newPerson);

const newPerson2 = JSON.parse(newPerson)
console.log(newPerson2);