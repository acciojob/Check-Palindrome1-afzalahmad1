 let string = str.toLowerCase();
 let high = str.length-1;
let low = 0;

    // loop through half of the string
while(high<low){
	if(string(high)!==string(low)){
		return false;
	}
	high++;
	low--;
}
    return true;
}
module.exports = palindrome
