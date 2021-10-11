var myFirstString = 'Javascript is a light weight platform, javascript is a cross platform'

console.log(myFirstString.length)

console.log(myFirstString.indexOf('Javascript'))
console.log(myFirstString.indexOf('cross'))

console.log(myFirstString.lastIndexOf('javascript'))
console.log(myFirstString.lastIndexOf('platform'))

console.log(myFirstString.slice(0,21))
console.log(myFirstString.slice(11,40))
console.log(myFirstString.slice(-20))
console.log(myFirstString.slice(11))

console.log(myFirstString.substr(8,30))
console.log(myFirstString.substr(31,60))
console.log(myFirstString.substr(-20))

console.log(myFirstString.toUpperCase())

console.log(myFirstString.toLowerCase())

var firstName = 'javascript is a'
var lastName = 'cross platform'

console.log(firstName.concat(lastName))
console.log(firstName.concat(lastName,' ',myFirstString))


console.log(firstName + lastName + myFirstString)

console.log(myFirstString.charAt(25))

var extraSpace = "       javascript          "
console.log(extraSpace)
console.log(extraSpace.trim())

console.log(myFirstString.split(" "))
console.log(myFirstString.split(","))
console.log(myFirstString.split(""))
console.log(myFirstString.split(','))
