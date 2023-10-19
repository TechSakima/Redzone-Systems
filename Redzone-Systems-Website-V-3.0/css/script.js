// Example dynamic background (You can use a more advanced technique)
let colors = ['red', 'blue', 'black'];
let index = 0;

setInterval(() => {
  document.getElementById('dynamicBackground').style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 3000);
