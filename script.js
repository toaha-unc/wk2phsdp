let pl = document.getElementById("pl");
let detail = document.getElementById("detail");
let cart = [];
let cartTable = document.getElementById("table");
let num = document.querySelector(".num");
let drinkModal = document.getElementById('modal');
let modalBody = document.getElementById('bdy');
let closeModalBtn = document.getElementById('close');

function renderCart() {
    num.textContent = cart.length;
    if (cart.length === 0) {
        cartTable.innerHTML = `<table style="width:100%"><thead><tr><th>SL</th><th>Img</th><th>Name</th></tr></thead></table>`;
        return;
    }
    let rows = cart.map((item, idx) => `
        <tr>
            <td>${idx + 1}</td>
            <td><img src="${item.img}" width="40" style="border-radius:50%"></td>
            <td>${item.name}</td>
        </tr>
    `).join("");
    cartTable.innerHTML = `
        <table style="width:100%">
            <thead>
                <tr><th>SL</th><th>Img</th><th>Name</th></tr>
            </thead>
            <tbody>
                ${rows}
            </tbody>
        </table>
    `;
}

function isInCart(drink) {
    return cart.some(item => item.name === drink.strDrink);
}

function addToCart(drink, btn) {
    if (cart.length >= 7) {
        alert('You can not add more than 7 drinks to a group!');
        return;
    }
    if (!isInCart(drink)) {
        cart.push({ name: drink.strDrink, img: drink.strDrinkThumb });
        renderCart();
        if (btn) {
            btn.textContent = 'Selected';
            btn.disabled = true;
        }
    }
}

function showModal(drink) {
    modalBody.innerHTML = `
        <div class="card2">
            <img src="${drink.strDrinkThumb}" width="200px" style="margin:auto;display:block;">
            <strong class="t2">Name: ${drink.strDrink}</strong>
            <div class="t2">Category: ${drink.strCategory}</div>
            <div class="t2">Alcoholic: ${drink.strAlcoholic}</div>
            <div class="t2">Instructions: ${drink.strInstructions}</div>
        </div>
    `;
    drinkModal.style.display = 'flex';
}

closeModalBtn.onclick = function() {
    drinkModal.style.display = 'none';
}
drinkModal.onclick = function(e) {
    if (e.target === drinkModal) drinkModal.style.display = 'none';
}

let onload = ()=>{
    pl.innerHTML="";
    detail.innerHTML="";
    let input = document.getElementById("s")
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a")
    .then(r=>r.json())
    .then(d=>{
        if(d.drinks === null) {
            pl.innerHTML = '<div class="not-found-message">Your searched drink is not found.</div>';
            return;
        }
        d.drinks.forEach(element => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML=
            `<div>
            <img src="${element.strDrinkThumb}" width="200px">
            <br>
                <strong class="t">Name: ${element.strDrink}</strong>
                <div class="t">Category: ${element.strCategory}</div>
                <div class="t">Instructions: ${element.strInstructions.slice(0,10)}...</div>
                <div class="btn-row">
                  <button class="btn1">Add to Cart</button>
                  <button class="btn2">Details</button>
                </div>
            </div>`;
            let btn1 = div.querySelector('.btn1');
            if (isInCart(element)) {
                btn1.textContent = 'Selected';
                btn1.disabled = true;
            } else {
                btn1.textContent = 'Add to Cart';
                btn1.disabled = false;
                btn1.onclick = () => addToCart(element, btn1);
            }
            let btn2 = div.querySelector('.btn2');
            btn2.onclick = () => showModal(element);
            pl.appendChild(div);
        });
    })
    .catch(e=>{
        console.log(e);
    })
    renderCart();
}

let search = ()=>{
    pl.innerHTML="";
    detail.innerHTML="";
    let input = document.getElementById("s")
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(r=>r.json())
    .then(d=>{
        if(d.drinks === null) {
            pl.innerHTML = '<div class="not-found-message">Your searched drink is not found.</div>';
            return;
        }
        d.drinks.forEach(element => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML=
            `<div>
            <img src="${element.strDrinkThumb}" width="200px">
            <br>
                <strong class="t">Name: ${element.strDrink}</strong>
                <div class="t">Category: ${element.strCategory}</div>
                <div class="t">Instructions: ${element.strInstructions.slice(0,10)}...</div>
                <div class="btn-row">
                  <button class="btn1">Add to Cart</button>
                  <button class="btn2">Details</button>
                </div>
            </div>`;
            let btn1 = div.querySelector('.btn1');
            if (isInCart(element)) {
                btn1.textContent = 'Selected';
                btn1.disabled = true;
            } else {
                btn1.textContent = 'Add to Cart';
                btn1.disabled = false;
                btn1.onclick = () => addToCart(element, btn1);
            }
            let btn2 = div.querySelector('.btn2');
            btn2.onclick = () => showModal(element);
            pl.appendChild(div);
        });
    })
    .catch(e=>{
        console.log(e);
    })
    renderCart();
}

onload();