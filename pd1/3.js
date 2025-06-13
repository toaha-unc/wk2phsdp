let arr = [20,19,18,17,16,15,14,13,12,11,10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j]= arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)

