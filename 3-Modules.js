// CommonJS, every file is a module (by default)
// Modules = Encapsulate code (only share minimum)

const fruits = require('./4-Fruit')
const { mango, grape } = require('./4-Fruit')
const health = require('./5-Utils')
const data = require('./6-Alternative_Flavor')
// console.log(data)
require('./7-Mind_grenade')
// console.log(fruits)

health('orange')
health(mango)
health(grape)
health(fruits.mango)
health(fruits.grape)