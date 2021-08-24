var plusOne = function(digits) {
		let i=1;

    if (digits[digits.length-1] === 9) { // if the last number == 9, need to carring (進位)
        while (digits[digits.length-i] === 9) {
            digits[digits.length-i] = 0;
            i++;
        }
        if (i>digits.length) { // add a digit
            return [1, ...digits]; // or digits.unshift(1);
        } else {
            digits[digits.length-i] +=1;
						return digits;
        }
    } else {
        digits[digits.length-1] += 1;
				return digits;
    }
};