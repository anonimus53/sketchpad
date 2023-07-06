// Start by storing the container and initialize gridX = 0
const container = document.getElementById('container');
let gridX = 0;
//Creates grid 16x16 if not num given
function createGrid(num = 16){
let str = num.toString();    
container.style.gridTemplateColumns = 'repeat('+str+', 1fr)';
container.style.gridTemplateRows = 'repeat('+str+', 1fr)';
container.style.gap = '5px';
gridX = num;
}

//Creates the divs to populate the grid of the DIV(id=container) 
function createGridItems(num = 256){
 for(let i =0; i < num; i++){
   const item = document.createElement('div');
   item.style.backgroundColor = 'white'; //All the divs(items) start white
   item.setAttribute('class', 'item');//All divs have class = item 
   item.textContent = '';//All divs are empty
   //All divs have fucntion tha randomize their color when mouse passes by
    item.addEventListener('mouseover', function(){
      const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
      const r = randomBetween(0, 255);
      const g = randomBetween(0, 255);
      const b = randomBetween(0, 255);
      const rgb = `rgb(${r},${g},${b})`; // Collect all to a css color string
      item.style.backgroundColor = rgb;
    });
    //Appends all divs to the grid
  container.appendChild(item);
 }
}

//first call, Creation of default 16x16 grid
createGrid();
createGridItems();
// first grid has been created

//display size var, current ontent is 16x16
let currentSize = document.getElementById('size');
//display size of grid
function displaySiZe(gridsize = 16){
  let strSize = gridsize.toString();
  currentSize.textContent = strSize + 'x' + strSize;
}

//Erase button( deletes grid and recreates it new 16x16)
const eraser = document.getElementById('eraser');
eraser.addEventListener('click', function(){
   container.textContent = ' ';
   createGridItems(gridX*gridX);
   displaySiZe(gridX); 
})

// I have to find a way to resize without breaking things
//(new day)
//gridX might help here...

//Resize button(guess what it does XD)
const resizeMe = document.getElementById('resize');
resizeMe.addEventListener('click', function(){
  gridX = prompt('Give me a Number between 1 and 50, cancel gives you the default grid 16x16');
  if(gridX != null && gridX > 0 && gridX < 50){
  container.textContent = ' ';
  createGrid(gridX);
  createGridItems(gridX*gridX);
  displaySiZe(gridX);
  }
  else{
    container.textContent = ' ';
    createGrid();
    createGridItems();
  }
})