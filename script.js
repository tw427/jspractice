//add html elements
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

//funtion to create grid
function createGrid(numSquares){
    //create grid
    for (let rows = 0; rows < numSquares * numSquares; rows++) {
        
        //create cell element    
        let cell = document.createElement("div");
        
        //name cell element       
        cell.setAttribute("id", "cell"); 
        
        cell.addEventListener('mouseover', changeColor)
        
        //append to DOM
        gridContainer.appendChild(cell)
    }

    gridContainer.setAttribute('style', `grid-template-columns: repeat(${numSquares}, 1fr)`);
}



//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

//button function for prompt 
newGridButton.addEventListener('click', function(){
    let numSquares = prompt("Please enter the number of squares you'd like for each side of your grid");
    removeGrid();
    createGrid(numSquares);
});

//function to remove old grid 
function removeGrid(){
    gridContainer.replaceChildren();
}

//adjust size of squares based on input
// function resizeGrid(numSquares){
//     let cell = document.getElementById("cell")

//     if (1 < numSquares >25){
//         cell.style.height = "75px";
//         cell.style.width = "75px";}
//     else if (26 < numSquares > 50){
//         cell.style.height = "50px";
//         cell.style.width = "50px";
//     }
//     else if (51 < numSquares > 75 ){
//         cell.style.height = "50px";
//         cell.style.width = "50px";
//     }
//     else if (76 < numSquares > 99){
//         cell.style.height = "50px";
//         cell.style.width = "50px";
//     }
//     gridContainer.style.gridTemplate = `repeat(${numSquares}, 1fr)/ repeat(${numSquares}, 1 fr)`;
//     }