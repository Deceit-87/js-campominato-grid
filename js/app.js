const GRID = document.getElementById('container');
const PLAY_BUTTON = document.getElementById('play-btn');
const SELECT = document.getElementById('difficult-level');
const DIFFICULT = SELECT.value

let rows;
let cols; 

PLAY_BUTTON.addEventListener('click',() =>{
    console.log(SELECT.value)

})




                           // GRIGLIA 
switch ( DIFFICULT ) {

    case 'Easy':
        rows = 10 ;
        cols = 10 ;
    break;


    case 'Medium':
        rows = 9 ;
        cols = 9 ;
    break;

    case 'Hard':
        rows = 7 ;
        cols = 7 ;
    break;
    default:
        rows = 10 ;
        cols = 10 ;
}



 
const CELL_NUMBERS = rows * cols;


console.log(rows,cols,CELL_NUMBERS);