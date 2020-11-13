
    const meals = [ 
        {id: cuid(),
            basePrice: 0,
            //tip and tax are used to convert a number--ie 6, to a decimal for calculating percentage.
            tipPercentage: 0,
            taxRate: 0,
            tip: 0,
            tax: 0,
            subtotal: 0 },
    ]

    //  tax: basePrice * taxRate / 100
    // tip: basePrice * tipPercentage / 100
      //subtotal: basePrice + tax
      //total: subtotal + tip

    let tipTotal = 0
    let mealCount = 0
    let averageTipPerMeal = 0
    console.log('store', averageTipPerMeal)

//the store and things that deal with store data should be here

export default { meals, tipTotal, mealCount, averageTipPerMeal}