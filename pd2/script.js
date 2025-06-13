let pl = document.getElementById("pl");
let detail = document.getElementById("detail")
let search = ()=>{
    pl.innerHTML="";
    detail.innerHTML="";
    let input = document.getElementById("s")
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(r=>r.json())
    .then(d=>{
        if(d.meals === null) {
            pl.innerText = "Not Found";
            return;
        }
        d.meals.forEach(element => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML=
            `<div>
            <img src="${element.strMealThumb}" width="200px">
            <br>
                <strong class="t">${element.strMeal}</strong>
            </div>`;
            pl.appendChild(div);
            div.addEventListener("click", ()=>{
                detail.innerHTML = "";
                let div2 = document.createElement("div");
                div2.className = "card2";

                let ings = ``;
                for(let i=1; i<21; i++){
                    let ing = element[`strIngredient${i}`];
                    if(ing == "" || ing == null){
                        continue
                    }
                    ings+=`<li>${ing}</li>`
                }

                div2.innerHTML= 
                `<div>
                <img src="${element.strMealThumb}" width="200px">
                <br><br>
                <strong class="t2">${element.strMeal}</strong>
                <strong>Ingredients</strong>
                ${ings}
            </div>`;
                detail.appendChild(div2)
            })
        });
    })
    .catch(e=>{
        console.log(e);
    })

}