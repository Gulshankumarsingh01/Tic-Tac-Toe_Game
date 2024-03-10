let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

let turnO =true;
const winPatterns =[  // These are the winning pattern of tic tac toe.
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () =>{  // This part of code is done to activate the reset game button
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => { 
        if(turnO){  // Player O turn
            box.innerText = "O";
            turnO = false;
        }else{  // Player X turn
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
        });
});

const disableBoxes = () =>{ //Disable box function is created
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{  // Enable function is created
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

const showWinner = (Winner) => {  // Winner section is created and show winner message after completion of the game
    msg.innerText = `Congratulations, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const  checkWinner =() =>{ // This part of code is checking the winner
            for(pattern of winPatterns){
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val !=="" && pos2Val !=="" && pos3Val !==""){
                if(pos1Val=== pos2Val && pos2Val === pos3Val) {
                   
                    showWinner(pos1Val);
                }
            }
            }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);