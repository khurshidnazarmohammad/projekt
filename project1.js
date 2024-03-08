
const currentNum = document.getElementById('number');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const decreaseBtn = document.getElementById('decrease');

let newNum;

// increase button
increaseBtn.addEventListener('click' , function(){
  newNum = Number(currentNum.innerHTML) + 1 ;
  currentNum.innerHTML = newNum;
});

// reset button
resetBtn.addEventListener('click' , function(){
  currentNum.innerHTML = 0 ;
})

// decreaseBtn
decreaseBtn.addEventListener('click' , function(){
  newNum = Number(currentNum.innerHTML) - 1 ;
  currentNum.innerHTML = newNum;
})





























//function eventHandler() {
  // document.body.style.background = "pink";
//}

//let button = document.querySelector("button");
//button.onclick = function () {
//  document.body.style.background = "pink";
//};

//let button = document.querySelector("button");

//button.addEventListener("click", function () {
// document.body.style.background = "green";
//});
//button.addEventListener("click", function () {
// console.log("milad bahrami");
//});

// let button = document.querySelector("button");

// button.addEventListener("mousedown", function () {
//  document.body.style.background = 'green';
// });
// button.addEventListener("mouseup", function () {
//   document.body.style.background = 'yellow';
// });

// button.addEventListener("click", function () {
//   document.body.style.background = 'pink';
// });

// let button = document.querySelector("button");

// button.addEventListener("mousedown", function () {
//   console.log("mousedown ");
// });
// button.addEventListener("mouseup", function () {
//   console.log(" mouseup");
// });

// button.addEventListener("contextmenu", function () {
//   console.log("right click");
// });
/////////////////////////////////////////////////








