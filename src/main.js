console.log('hi');
console.log(React);
console.log(ReactDOM);

const $textarea = document.querySelector('#textarea');
const $addBtn = document.querySelector('#add');
const $minusBtn = document.querySelector('#minus');

let number = 0;

$textarea.innerText = "" + number;

$addBtn.addEventListener('click', ()=>{
  number += 1;
  $textarea.innerText = "" + number;
})

$minusBtn.addEventListener('click', ()=>{
  number -= 1;
  $textarea.innerText = "" + number;
})
