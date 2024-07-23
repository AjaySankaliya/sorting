function merge(left,right){
    let result=[];
    let leftIndex=0;
    let rightIndex=0;
    
    while(leftIndex<left.length || rightIndex<right.length){
        if(leftIndex<left.length && (rightIndex>=right.length || left[leftIndex]<right[rightIndex])){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else
        {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result;
}

function mergesort(arr){
    if(arr.length<=1){
        return arr;
    }
    let middleIndex=Math.floor(arr.length/2);
    let leftarr=[];
    let rightarr=[];
    for(let i=0;i<middleIndex;i++){
        leftarr.push(arr[i]);
    }
    for(let i=middleIndex;i<arr.length;i++){
        rightarr.push(arr[i]);
    }
    
    let leftSorted=mergesort(leftarr);
    let rightSorted=mergesort(rightarr);
    
    return merge(leftSorted,rightSorted);
}

let ar=[7,6,3,2,1,4];
console.log(mergesort(ar));