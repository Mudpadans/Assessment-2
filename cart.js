///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
//console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let taxedItem = cartTotal + (cartTotal * tax);
    let couponedItem = taxedItem - couponValue;
    return couponedItem;
}

console.log(calcFinalPrice(20, 5, 0.10));
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    The first property is name, because every specific customer has name; if they don't have a name, they
need help. The data type for this property will be a string, because people generally don't get named with numbers.
    The second property chosen is age, small children would usually get samller meals than adults and
teenagers and a restaurant could create deals for families. Older people may also chose more traditional dishes compared to trendier younger adults, some seniors tend to have more medical condutions such as heart disease. The data type for the age property will be a string, because customers may not want to give their specific age so they may say "I'm in my 40s". 
    The third property is diet, this applies to specific chosen diets such as veganism, vegetarianism
pescatarianism, etc; as well as religious practices with dietary restrictions such as Halal and Kosher and allergies such as gluten and nuts. This property can also be written as none if they don't have any preferences. The data type for the diet property will be a string, because there are many types of diets, religions, and allergies that can't be written as a number or a boolean. 
    The fourth property is time, a restaurant needs to be prepared for rushes such as breakfast, lunch and
dinner. But a restaurant really needs to know which time is the busiest to be adequately staffed for that moment. The data type for the time property will be a string, since you can't write a semicolon, o'clock, or PM into a number.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customers = [
    {
        name: 'Jarred',
        age: 'late 20s',
        diet: 'none',
        time: 'around 2 PM',
    }
]