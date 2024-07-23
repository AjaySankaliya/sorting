//quick sort pivot have 4 types
//1. first element
//2. last element
//3. middle element
//4. random element
function quicksort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[arr.length-1];
    let left=[];
    let right=[];
    
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left[left.length]=arr[i];
            //left.push(arr[i]);
        }
        else
        {
            right[right.length]=arr[i];
            //right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot,quicksort(right));
}

let ar=[7,6,3,2,1,4];
console.log(quicksort(ar));