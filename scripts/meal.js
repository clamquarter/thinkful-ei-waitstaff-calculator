//a factory function that generates meals should be here.
//a validator function should ensure that numbers are put into the fields, nothing more.
import calculator from './calculator.js'

function createMeal(price, tip, tax) {
 return {
     id: cuid(),
     basePrice: price,
     //tip and tax are used to convert a number--ie 6, to a decimal for calculating percentage.
     tipPercentage: tip , 
     taxRate: tax,
     tip: calculator.calculateTip(tip, price),
     tax: calculator.calculateTax(tax, price),
     subtotal: calculator.calculateSubtotal(calculator.calculateTax(tax, price), price)
 }   
}

export default {createMeal}