//1.using slice(),touppercase()
var a="hi good morning"
console.log(a)
console.log(a.slice(3,7).toUpperCase())
//2.using uppercase(),length
var b="hello welcome"
console.log(b);
console.log(b.toUpperCase(),"length",b.length)
//3.using charat(),charcodeat()
var c="good afternoon"
console.log(c.charAt(3))
console.log("ASCII Code",c.charCodeAt(3))
//4.using trim(),slice()
var d=" welcome "
console.log(d.trim())
console.log(d.slice(2,5))
//5.using concat(),tolowercase()
var e="hello!";
var f="WELCOME"
console.log(f.toLowerCase())
console.log(e.concat(f))
//6.using trimstart(),slice()
var g=" String"
console.log(g.trimStart().slice(1,8))
//7.using charat(),touppercase()
var h="string"
console.log(h.charAt(3).toUpperCase())
//8.using trim(),concat()
var i=" upper "
console.log(i.trim().concat("abc"))
//9.
//a.using trimstart(),trimend()
var j=" trimspace "
console.log(j.trimStart().trimEnd())
//b.using touppercae()
console.log(j.trim().toUpperCase())
//c.using slice()
console.log(j.trim().toUpperCase().slice(1,6))
//10.
//a.using tolowercase()
var k="HELLO"
var l="WORLD"
console.log(k.toLowerCase(),l.toLowerCase())
//b.using concatination
var k="String1"
console.log(k.concat(" String2"))
//c.using charat()
console.log(k.charAt(0))
