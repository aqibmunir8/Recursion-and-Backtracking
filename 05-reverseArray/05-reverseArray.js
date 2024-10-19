
function reverseArray(array, left = 0, right = array.length -1){
    if(left >= right){
        return;
    }
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    reverseArray(array, left+1, right-1)
}


let arr = [1,2,3,4,5];
reverseArray(arr);
console.log(arr);