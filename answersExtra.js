// Additional assignments for Day 5

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5 or not.
 The function should return the sum of just the numbers bigger than 5.
*/


/* WRITE YOUR ANSWER HERE */
const giveMeRandom = (n) => {
    let randomNumArr = []
    for(let i=0; i < n; i++) {
        randomNumArr.push(Math.floor(Math.random() * 10)+1)
    }
    return randomNumArr
}


const checkArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            console.log(arr[i] + " is bigger than 5");
            sum += arr[i]
        } else if (arr[i] === 5) {
            console.log(arr[i] + " is equal to 5");
            sum += arr[i]
        } else {
            console.log(arr[i] + " is not bigger than 5");
        }
    }
    console.log("The sum of the numbers greater than 5 is " + sum);
}


/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "shoppingCartTotal" which calculates the total due to the shop.
*/

/* WRITE YOUR ANSWER HERE */
let shoppingCart = [
    {
        id: '#001',
        name: 'product1',
        price: 500,
        quantity: 243.
    },
    {
        id: '#002',
        name: 'product2',
        price: 100,
        quantity: 58.
    },
    {
        id: '#003',
        name: 'product3',
        price: 700,
        quantity: 23.
    },
    {
        id: '#004',
        name: 'product4',
        price: 1200,
        quantity: 8.
    },
    {
        id: '#005',
        name: 'product5',
        price: 900,
        quantity: 76.
    },
    {
        id: '#006',
        name: 'product6',
        price: 30,
        quantity: 300.
    }
]

const shoppingCartTotal = (obj) => {
    let result = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        result += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return result;
}


/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in it.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id and the quantity to be shipped.
 Create a function called "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 6
 Create a function called "loopUntil" which receives an integer x between 0 and 9 as a parameter.
 The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a function called "average" which receives an array and returns the average numerical value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8
 Write a function called "longest" to find the longest string from a given array of strings.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 9
 Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
 The function should return true if the emailContent string does not contain the words SPAM or SCAM.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 10
 Write a function that receives a date as a parameter and calculates the number of days passed since the given date.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 11
 Write a function called "matrixGenerator" which receives two integers, x and y, as parameters.
 The result should be a matrix of x times y with, as value, the index of the position.
 Ex.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/