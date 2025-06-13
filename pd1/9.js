function monthlysavings(arr, num){
    if(typeof arr != "object"){
        return "invalid input"
    }
    if(typeof num != "number"){
        return "invalid input"
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=3000){
            arr[i] = arr[i]-(arr[i]*(20/100))
        }
    }
    console.log(arr)
    let sum =0
    for(let x of arr){
        sum+=x
    }
    console.log(sum)
    if(sum-num < 0) return "earn more"
    if(sum-num >=0) return (sum-num) 
}

let result = monthlysavings(100, [900,2700, 3400])
console.log(result)

