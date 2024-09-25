//1.using object.freeze()
var car={
    make:"showroom",
    model:"Ferrari",
     year:1998
}
console.log(car);
console.log(Object.freeze(car));
car.model="RR";
console.log(Object.isFrozen(car))
//2.using object.isfrozen()
var user={
    name:"swetha",
    age:16,
    email:"sg@gmail.com"
}
console.log(user);
console.log(Object.isFrozen(user))
//3.using object.seal()
var product={
    name:"vaseline",
    category:"liquid",
    price:320
}
console.log(product)
console.log(Object.isSealed(product))
//4.using object.keys()
var laptop={
    brand:"Dell",
    model:"intelcorei7",
    price:70000
}
console.log(laptop)
console.log(Object.keys(product));
//5.using object.values()
var home={
    location:"hyderabd",
    size:"1000feet",
    price:30000000
}
console.log(home)
console.log(Object.values(home));
//multiple methods
//6.using object.seal(),object.issealed()
var smartphone={
    brand:"samsung",
    model:"s24,5G",
    prize:100990
}
console.log(smartphone);
console.log(Object.seal(smartphone))
smartphone.prize=109900
console.log(Object.isSealed(smartphone))
//7.using object.freeze(),object.isfrozen()
var book={
    title:"The Adventures of Sherlack Holmes",
    author:"Conan Doyle",
    publishedyear:1998
}
console.log(Object.freeze(book))
console.log(Object.isFrozen(book))
book.publishedyear=1992
//8.using object.keys(),object.values()
var person={
    firstname:"swetha",
    lastname:"bhimari",
    age:16
}
console.log(person)
console.log(Object.keys(person))
console.log(Object.values(person))
//9.using object.entries,delete()
var course={
    title:"JAVA fullstack",
    instructor:"google",
    duration:":6mnths"
}
console.log(Object.entries(course))
delete course.duration;
console.log(course)
//10.using object.seal(),object.keys()
var employe={
    name:"swetha",
    position:"webdeveloper",
    salary:50000
}
console.log(Object.seal(employe))
console.log(Object.isSealed())
employe.position="appdeveloper"
console.log(Object.keys(employe))
console.log(employe)