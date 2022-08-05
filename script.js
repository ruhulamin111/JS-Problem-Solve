// 1. print the number which is divisable by 5 

/* function divisable(num) {
    let number = [], count = 0;
    for (let i = 1; i < num; i++) {
        if (i % 5 == 0) {
            number.push(i);
        }
    }
    return number;
}
const result = divisable(50);
console.log(result); */

// 2. print the averge number which is divisable by 5 

/* function divisable(num) {
    let sum = 0, count = 0;
    for (let i = 1; i < num; i++) {
        if (i % 5 == 0) {
            sum = sum + i;
            count = count + 1;
        }
    }
    let output = sum / count;
    return output;
}
const result = divisable(60);
console.log(result);
 */

// 3. calculate the price of book price less than or equal 5 kg it's per price 2000 and more than 5 kg it's price 1500 ; 

/* function buyBook(quantity) {
    if (typeof quantity != 'number') {
        return 'Please input a number'
    }
    else if (quantity <= 0) {
        return 'Please buy minimum one book'
    }
    let price = 0;
    if (quantity <= 5) {
        price = quantity * 2000;
    }
    else {
        price = quantity * 1500
    }
    return price;
}
const result = buyBook(0);
console.log(result); */

// 4. calculate the price of electricity bill first 100 kw price is 5 tk and more than 100 kw then the price is 6tk  per unit 

/* function billOfElectricity(unit) {
    if (typeof unit != 'number') {
        return 'Please input a number'
    }
    else if (unit <= 0) {
        return 'Please input a positive number'
    }
    let bill = 0;
    if (unit <= 100) {
        bill = unit * 5;
    }
    else {
        billPrevious = 100 * 5;
        restUnit = unit - 100;
        billUpdate = restUnit * 6;
        bill = billPrevious + billUpdate;
    }
    return bill;
}
const result = billOfElectricity(120);
console.log(result); */

// 5. find a A+ marks in a result sheet  

/* 
function checkGPA(marks) {
    if (Array.isArray(marks) == false) {
        return 'Please push an array'
    }
    for (let i = 0; i < marks.length; i++) {
        let element = marks[i];
        if (element >= 80) {
            return true;
        }
    }
    return false;
}
const result = checkGPA(70);
console.log(result); */

// 6. find a largest number in a array. 

function largestNumber(array) {
    if (Array.isArray(array) == false) {
        return 'Please push an array'
    }
    let largest = array[0];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element >= largest) {
            largest = element;
        }
    }
    return largest;
}
const result = largestNumber([34, 67, 98, 32, 6, 37]);
console.log(result);

