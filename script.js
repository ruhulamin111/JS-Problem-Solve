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
function buyBook(quantity) {
    let price = 0;
    if (quantity <= 5) {
        price = quantity * 2000;
    }
    else {
        price = quantity * 1500
    }
    return price;
}
const result = buyBook(5);
console.log(result);
