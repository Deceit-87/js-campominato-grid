const GRID_EL = document.getElementById('grid');
const PLAY_BUTTON = document.getElementById('play-btn');
const SELECT = document.getElementById('difficult-level');

// let rows;
// let cols; 
// let cellSize;  
let rows, cols, cellSize;

PLAY_BUTTON.addEventListener('click',() =>{
    
const DIFFICULT = SELECT.value;
switch ( DIFFICULT ) {

    // case 'Easy':
    //     // rows = 10 ;
    //     // cols = 10 ;
    //     rows = cols = 10;
    // break;


    case 'Medium':
        // rows = 9 ;
        // cols = 9 ;
        rows = cols = 9;
    break;

    case 'Hard':
        // rows = 7 ;
        // cols = 7 ;
        rows = cols = 7;
    break;
    default:
        rows = 10 ;
        cols = 10 ;
}
 
    
const CELL_NUMBERS = rows * cols;
cellSize = `calc(100% / ${cols})`;
GRID_EL.innerHTML = '';
const callBack =function (){
    console.log('mi hai clickato!');
    this.classList.add('selected')
}


            //   GENERAZIONE GRIGLIA


    for (let i = 0; i < CELL_NUMBERS; i++) {
        
        const CELL = document.createElement('div');
        CELL.style.width = cellSize;
        CELL.append(i + 1);
        CELL.classList.add('cell');
        
        GRID_EL.appendChild(CELL);
       
    
        console.log(CELL)
        CELL.addEventListener('click',callBack)
    }
    

})




    


                           




 




