import store from './store.js'
import meal from './meal.js'

//handles form entries and calculation functions. event listeners here.

function render() {

    //render the calculator in the DOM
    $('.js-container').html(`  <div class='group'>
    <div class="item">
        <section class="section">
        <h2>Enter the Meal Details</h2>
        
        <form class="js-meal-form' action="submit">
        <label for="js-base-meal-price">Base Meal Price:  </label>
        <input type="number" name="base-meal-price" id="js-base-meal-price">
        <br />
        <label for="js-tax-rate">  Tax Rate: % </label>
        <input type="number" name="tax-rate" id="js-tax-rate">
        <br />
        <label for="tip-percentage">Tip Percentage: % </label>
        <input type="number" name="tip-percentage" id="js-tip-percentage">
        <br />
        <br />
        <br />
        <button type="submit" class="js-submit" >Submit</button>
       <input class="js-cancel-button" type="reset" value="Cancel">
        
    </form>

        </section>
    
    </div>

    <div class="item">
       <section class="js-customer-charges section">
        <h2>Customer Charges</h2>
        
       <p>Subtotal: $${store.meals[store.meals.length - 1].subtotal.toFixed(2)} </p> 
       <p>Tip: $${store.meals[store.meals.length - 1].tip.toFixed(2)}</p>
       <hr />
       <p>Total: $${(store.meals[store.meals.length - 1].subtotal + store.meals[store.meals.length - 1].tip).toFixed(2)}</p>
       </section> 
        <section class="js-earnings-info section">
            <h2>My Earnings Info</h2>    
          
            <p>Tip Total: $${store.tipTotal.toFixed(2)}</p>
       <p>Meal Count: ${store.meals.length - 1}</p>
       <p>Average Tip Per Meal: $${store.averageTipPerMeal.toFixed(2)}</p>
            </section>
        
    </div>
    
</div>
<footer><button class="js-reset">Reset</button></footer>`)
}

function handleSubmitMealClicked() {
    
    $('.js-container').on('click', '.js-submit', function(event) {
        event.preventDefault()
        console.log('is this on??')
        store.mealCount += 1
        let price = parseInt($('#js-base-meal-price').val() )
        let tax = $('#js-tax-rate').val() / 100
        let tip = $('#js-tip-percentage').val() / 100
        
        
        store.meals.push(meal.createMeal(price, tip, tax))
         
        render()
        $('.js-subtotal').html()
        console.log('submit meal clicked' , store.meals)
    } )
}

function handleResetClicked() {
    $('.js-container').on('click', '.js-reset', function(event) {
        store.meals = []
        store.tipTotal = 0
        store.averageTipPerMeal = 0
        render()
  
    } )
}

function calculateTip(tipPercentage, basePrice) {
let tip = tipPercentage *  basePrice
store.tipTotal += tip

store.averageTipPerMeal = store.tipTotal / store.mealCount
return tip
}

function calculateTax(taxRate, basePrice) {
let tax = taxRate * basePrice
return tax
}

function calculateSubtotal(tax, basePrice) {
let subtotal = tax + basePrice
return subtotal
}



function bindEventListeners() {
    handleSubmitMealClicked()
    handleResetClicked()
    
}

export default {render, bindEventListeners, calculateTip,
    calculateTax,
    calculateSubtotal}