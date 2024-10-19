
function  isPalindrome(string, left = 0, right = string.length -1){
    if(left >= right){
        return true;
    }
    if(string[left] !== string[right]){
        return false;
    }
    
    return isPalindrome(string, left+1, right-1)
}


let str = "abba"
console.log(isPalindrome(str));