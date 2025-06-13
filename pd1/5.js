let arr = []
for(let i=1; i<51;i++){
    arr.push(i)
}

arr = arr.filter(x=>x%3==0 && x%5==0)

console.log(arr)
