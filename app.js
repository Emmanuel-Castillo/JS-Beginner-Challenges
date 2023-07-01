//Return sum of two numbers
function addition(num1,num2){
  return num1 + num2
}

console.log(addition(56,76))

//Convert hours to seconds
function hoursToSeconds(hours) {
  return hours * 60 * 60
}

console.log(hoursToSeconds(1))

//Calculate perimeter of rectangle
function calcPerimeter(length,width){
  return (2 * length) + (2 * width)
}

console.log(calcPerimeter(10,20))

//Calculate triangle area
function triangleArea(base,height){
  return .5 * base * height
}

console.log(triangleArea(20,20))

//Extend a string
function extendString(str){
  return str + "Frontend"
}

console.log(extendString("Simplified "))

//Greater than 100
function sumGreaterThan100(num1,num2){
  return num1 + num2 > 100
}

console.log(sumGreaterThan100(98,1))

//Less than or equal to zero
function lEZero(num){
  return num <= 0
}

console.log(lEZero(-1))

//Opposite boolean
function oppositeBoolean(bool){
  return !bool
}

console.log(oppositeBoolean(true))

//Is not 0
function isNotZero(num){
  return num != 0
}

console.log(isNotZero(0))

//Calculate remainder
function calcRemainder(num1, num2){
  return num1 % num2
}

console.log(calcRemainder(10,3))

//Is number odd
function isOdd(num){
  return num % 2 === 1
}

console.log(isOdd(3))

//If even, return 1 otherwise -1
function booleanInteger(num){
  return (num % 2 === 0 ? 1 : -1)
}

console.log(booleanInteger(50))

//If logged in and subscribed return true
function isLoggedAndSubscribed(logged, subbed){
  return logged === "LOGGED_IN" && subbed === "SUBSCRIBED" 
}

console.log(isLoggedAndSubscribed("LOGGED_IN", "SUBSCRIBED"))


