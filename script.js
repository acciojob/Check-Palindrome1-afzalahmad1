 let string = str.toLowerCase();
 let high = str.length-1;
let low = 0;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
