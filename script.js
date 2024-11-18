document.addEventListener('DOMContentLoaded', function() {
    boardSize(16);
})

function boardSize(size){
    let sketchpad = document.querySelector('#sketchpad');

    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        // div.style.border = '.2px solid black';
        sketchpad.insertAdjacentElement('beforeend', div);
    }
}