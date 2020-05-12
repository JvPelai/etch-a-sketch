const container = document.querySelector('#container');
const square = document.createElement('div');
square.classList.add('square');

let squarelist = document.querySelectorAll("#square");
const reset = document.querySelector("#reset");

function gridSize (){
    let squares = document.getElementById('squares');
    size = squares.options[squares.selectedIndex].value;
    makeGrid(size)
    squarelist = document.querySelectorAll("#square");
    return size
}
var size = gridSize()


function makeGrid (size){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=1; i<=(size*size); i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.id = ("square");
        container.appendChild(square);
        square.addEventListener('mouseover', () => {square.style.backgroundColor="black"}); 
}
}

function wipeSketch(){
    for (let i = 0; i < squarelist.length; i++){
        squarelist[i].style.backgroundColor="white";
    }
}
reset.addEventListener('click', () => {wipeSketch()});



gridSize();
makeGrid(size);
