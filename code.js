
//let gridNum = 16;
//let gridStr = gridNum.toString();
//let gridNio = gridNum*gridNum;




const container = document.getElementById('container');

function createGrid(num = 16){
let str = num.toString();    
container.style.gridTemplateColumns = 'repeat('+str+', 1fr)';
container.style.gridTemplateRows = 'repeat('+str+', 1fr)';
container.style.gap = '5px';
}


function createGridItems(num = 256){
 for(let i =0; i < num; i++){
   const item = document.createElement('div');
   item.style.backgroundColor = 'white';
   item.setAttribute('class', 'item');
   item.textContent = '';
    item.addEventListener('mouseover', function(){
      const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
      item.style.backgroundColor = rgb;
    });
  container.appendChild(item);
 }
}

//first call
createGrid();
createGridItems();
// first grid has been created

//erase button, deletes grid and recreates it
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', function(){
   container.textContent = ' ';
   createGridItems();
})

// I have to find a way to resize without breaking things...