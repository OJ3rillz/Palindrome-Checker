function palindrome(str) {
    let letters = [];
    let regix = ReqExp('[]', 'g');

// remove special characters, while spaces and punctuation
str = str.replace(regix, '');
str = srt.toLowerCase();

//create an array of letters
for(let i = 0; i < str.length; i++) {
      letters.push(str[i]);
}

//reverse the letters and join them to a string
letters.reverse();
let newStr = letters.join('');

//check if newStr is the same as str
if(str === newStr) {
  return true;
  } else {
        return false;
  }
}
    
    
    
    palindrome("eye");