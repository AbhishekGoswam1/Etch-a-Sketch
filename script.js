let color = 'black';
let click = false;

// Event Listener 

document.addEventListener('DOMContentLoaded', function() {
    boardSize(16);

    document.querySelector("body").addEventListener('click', function(e){
        if(e.target.tagName != 'BUTTON'){
            click = !click;
            let draw = document.querySelector('#draw');
            if(click){
                draw.innerHTML = 'You can Draw!';
            } else {
                draw.innerHTML = 'You can\'t Draw!';
            }
        }
    });

    // button code to create grid according to user input

    let btn = document.querySelector('#create-grid');
    btn.addEventListener('click', function(){
        let size = getSize();
        boardSize(size);
    });
})

// Function to create grid

function boardSize(size){
    let sketchpad = document.querySelector('#sketchpad');

    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.addEventListener('mouseover', colorDiv);
        sketchpad.insertAdjacentElement('beforeend', div);
    }
}

// Function to get user input and validate it

function getSize(){
    let userInput = document.querySelector('#grid-size').value;
    let message = document.querySelector('#message');
    if(userInput === null || userInput === ''){
       message.innerHTML = 'Please enter a valid number';
    } else if (userInput < 1  || userInput > 80){
        message.innerHTML = 'Please enter a number between 1 and 80';
    } else {
        message.innerHTML = '';
        return userInput;
    }
}

// Function to color the divs

function colorDiv(){
   if(click){
        if(color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (color == 'black'){
            this.style.backgroundColor = 'black';
        } else if (color == 'white'){
            this.style.backgroundColor = 'white';
        } else {
            this.style.backgroundColor = 'red';
        }
   }
}

// Function to set color

function setColor(colorChoice){
    color = colorChoice;
    return color;
}

// Function to reset the grid

function reset(){
    let boxes = document.querySelectorAll('#sketchpad div');
    boxes.forEach(box => box.style.backgroundColor = 'white');
}