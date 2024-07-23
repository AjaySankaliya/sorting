function selectionsort(arr){
    let n=arr.length;
    for(let i=0;i<n;i++){
        let min=i;
        for(let j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j;
            }
        }
        if(min!=i){
            let temp=arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
    return arr;
}

let ar=[7,6,3,2,1,4];
console.log(selectionsort(ar));