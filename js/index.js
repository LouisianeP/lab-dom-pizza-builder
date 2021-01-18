// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};



// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};


// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.cap,.stem').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenP => {
    if (state.greenPeppers) {
      oneGreenP.style.visibility = 'visible';
    } else {
      oneGreenP.style.visibility = 'hidden';
    }
  });

}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  const el = document.querySelector('.sauce');
  // console.log(el);
    if (state.whiteSauce) {
        el.classList.add('sauce-white')
    } else {
        el.classList.remove('sauce-white')
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  const el = document.querySelector('.crust');
    if (state.glutenFreeCrust) {
        el.classList.add('crust-gluten-free')
    } else {
        el.classList.remove('crust-gluten-free')
    }

}

function renderButtons() {
  const el = document.querySelector('.btn-pepperoni')
    if (state.pepperoni) {
        el.classList.add('active')
    } else {
        el.classList.remove('active')
    }
  
  const el2 = document.querySelector('.btn-mushrooms')
    if (state.mushrooms) {
        el2.classList.add('active')
    } else {
        el2.classList.remove('active')
    }

  const el3 = document.querySelector('.btn-green-peppers')
//  console.log(el3)
    if (state.greenPeppers) {
        el3.classList.add('active')
    } else {
        el3.classList.remove('active')
  }


  const el4 = document.querySelector('.btn-sauce')
  // console.log(el4)
    if (state.whiteSauce) {
        el4.classList.add('active')
    } else {
        el4.classList.remove('active')
  }


  const el5 = document.querySelector('.btn-crust')
    if (state.glutenFreeCrust) {
        el5.classList.add('active')
    } else {
        el5.classList.remove('active')
  }

}

function renderPrice() {
 // Iteration 4: change the HTML of `<aside class="panel price">`
// console.log(document.querySelectorAll('.panel > ul > li'))

const elem = document.querySelectorAll('.price > ul > li');
console.log(elem);
console.log(elem[0])

if (state.pepperoni == false) elem[0].style.display ='none'
else elem[0].style.display = 'block'

if (state.mushrooms == false) elem[1].style.display ='none'
else elem[1].style.display = 'block'

if (state.greenPeppers == false) elem[2].style.display ='none'
else elem[2].style.display = 'block'

if (state.whiteSauce == false) elem[3].style.display ='none'
else elem[3].style.display = 'block'

if (state.glutenFreeCrust == false) elem[4].style.display ='none'
else elem[4].style.display = 'block'

sum = basePrice + ingredients.pepperoni.price*state.pepperoni + ingredients.mushrooms.price*state.mushrooms + ingredients.greenPeppers.price*state.greenPeppers + ingredients.whiteSauce.price*state.whiteSauce + ingredients.glutenFreeCrust.price*state.glutenFreeCrust

console.log(sum)

const total = document.querySelector('.price > strong')
total.innerHTML = `$${sum}`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  console.log(state.greenPeppers);
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  console.log(state.whiteSauce)
  renderEverything();
});


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  console.log(state.glutenFreeCrust)
  renderEverything();
});