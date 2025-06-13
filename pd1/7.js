var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
let arr = []
for(let x of numbers){
    if(arr.includes(x)){
        continue
    } else {
        arr.push(x)
    }
}

console.log(arr)