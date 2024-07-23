function insertionsort(arr){
    let n=arr.length;
    for(let i=1;i<n;i++){
        let current=arr[i];
        let j;
        for(j=i-1;j>=0 && arr[j]>current;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=current;
    }
    return arr;
}

let ar=[7,6,3,2,1,4];
console.log(insertionsort(ar));