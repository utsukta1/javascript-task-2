let person = [{
    name: "Utsukta",
    age: 23,
    city: "Lalitpur"

},
{
    name: "Fereeca",
    age: 16,
    city: "Kathmandu"
},
{
    name: "Utkristi",
    age: 17,
    city: "Bhaktapur"
}];

function groupByCity(acc, cur) {
    return { ...acc, [cur.city]: cur };
}

// let newPerson = person.reduce(groupByCity, {});
// console.log(newPerson);

console.log(person.reduce(groupByCity, {}));