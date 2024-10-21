const person={
    name:"Alice",
    age:30,
    city:"new york"
};
delete person.city;
person.country="USA";
person.age=31;
console.log(person);

const smartphone={
    brand:"Samsung",
    model:"Galaxy S21",
    price:799
};
delete smartphone.model;
console.log(smartphone);

const book={
    title:"Learn javaScript",
    author:"John Smith",
    pages:400
};

var data=[10,20,["apple","banana"],["cat",["dog","element"],"fish"],"grape"]
console.log(data[3][2])

var items=[["pen", "pencil"], ["notebook"], [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log(items[2][2][2][0])