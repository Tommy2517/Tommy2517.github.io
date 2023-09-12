let food = document.createElement('div');
food.tabIndex = 0;
food.classList.add('food');
food.setAttribute('id', '2')
let position_food = [0, 0]
let points = 0;

let point_wind = document.createElement('div');
point_wind.classList.add('point_wind');


let food_x = () => Math.floor(Math.random() * 16) * 10;
let food_y = () => Math.floor(Math.random() * 6) * 10;
let position_food_change = function () {
    points++;
    point_wind.innerText = `${points}`
    food.style.top = `${food_y()}px`
    food.style.left = `${food_x()}px`
    position_food = [parseInt(food.style.top), parseInt(food.style.left)];

}
