var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let maxLength = friends[0].length
let maxName = friends[0];

for(let x of friends){
    if(x.length > maxLength){
        maxLength = x.length
        maxName = x
    }
}

console.log(maxName)