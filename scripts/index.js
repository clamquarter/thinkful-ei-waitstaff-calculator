//main function calls the render fuction and binds the event listeners
import calculator from './calculator.js'

function main() {
    calculator.bindEventListeners()
    calculator.render()
}

$(main)