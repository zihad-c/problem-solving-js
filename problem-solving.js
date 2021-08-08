/* =============================
js problem solving for beginners 
=============================== */

// 1. feet to inch conversion
let n = 0;
function feetToInch(n) {
    let result = n * 12;
    return result;
}

let myResult = feetToInch(12);
console.log(myResult, 'inch');

// 2. centimeter to meter conversion
let cm = 0;
function centimeterToMeter(cm) {
    let m = cm / 100;
    return m;
}

let myCenti = centimeterToMeter(100);
console.log(myCenti, 'meter');

// 3. paper requirements of books

function paperRequirements(num1, num2, num3) {
    let requiredPagesForNum1 = 100;
    let requiredPagesForNum2 = 200;
    let requiredPagesForNum3 = 300;
    copyOfNum1 = num1 * requiredPagesForNum1;
    copyOfNum2 = num2 * requiredPagesForNum2;
    copyOfNum3 = num3 * requiredPagesForNum3;
    let total = copyOfNum1 + copyOfNum2 + copyOfNum3
    return total;
}

let myBook = paperRequirements(1, 1, 1);
console.log('total pages needed to print books', myBook);

/* =============================================
4. to find out the largest element from an array
=============================================== */

let names = ['tanvir', 'rifat', 'jubaet', 'tishat', 'mumtahina'];
/* function bestFriend(names) {
    let firstName = names[0];
    for (i = 0; i <= names.length; i++) {
        if (i > firstName) {

        }
    }
    return i;
}

let besty = bestFriend(names);
console.log(besty); */

/* ============================================================
5. find the numbers with positive value from an array and stop the loop when you find a number with negative value and put the numbers of positive value into another array.
============================================================= */
let arr = [2, 4, 8, 10, 0, -2, 9];
let temp = [];
for (i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
        // temp.push(arr[i]);
        console.log(arr[i]);
    }
    else break;
}