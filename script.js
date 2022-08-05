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

// 3. print the  number  of vowels in a string 
function vowelCheck(sentence) {
    let count = 0;
    for (let i = 1; i < sentence.length; i++) {
        let element = sentence[i];
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            count = count + 1;
        }
    }
    return count;
}
const sentence = 'My bengal of gold i love you'
const result = vowelCheck(sentence);
console.log(result);
