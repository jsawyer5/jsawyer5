var startbtn;
var single;
var multiple;
var playernum;
var started = false;
var player_x;
var count = 0;
var arrayCount = ['', '', '', '', '', '', '', '', ''] ;
var winner = '';
var name1 = '';
var name2 = '';

document.addEventListener("DOMContentLoaded", function(){
  /*single.onclick = function() {
    clickbtn(this.id);
  }*/


  startbtn = document.getElementById('startbtn');
  single = document.getElementById('single');
  multiple = document.getElementById('multiple');

  multiple.onclick = function() {
    clickbtn(this.id);
  }

});

document.addEventListener('click', function(event) {
  let indexes = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
  if( indexes.includes(event.target.id) && started) {
    var squareClicked = document.getElementById(event.target.id)
    var divElement =document.createElement('text');
    divElement.style.setProperty ('font-size', '70px');
    divElement.innerHTML = 'O';
    squareClicked.appendChild(divElement);
    count ++;
    if (count % 2 === 0) {
      divElement.innerHTML = 'X';
      arrayCount[event.target.id] = 'X';
    }
    else {
      arrayCount[event.target.id] = 'O';
    }
    if (arrayCount[0] ===  arrayCount[1] && arrayCount[1] === arrayCount[2]){
      winner = arrayCount[0];
    } else if (arrayCount[3] === arrayCount[4] && arrayCount[4] === arrayCount[5]) {
      winner = arrayCount[3];
    } else if (arrayCount[6] === arrayCount[7] && arrayCount[7] === arrayCount[8]) {
      winner = arrayCount[6];
    } else if (arrayCount[0] === arrayCount[3] && arrayCount[3] === arrayCount[6]) {
      winner = arrayCount[0]; 
    } else if (arrayCount[1] === arrayCount[4] && arrayCount[4] === arrayCount[7]) {
      winner = arrayCount[1];
    } else if (arrayCount[2] === arrayCount[5] && arrayCount[5] === arrayCount[8]) { 
      winner = arrayCount[2]; 
    } else if (arrayCount[0] === arrayCount[4] && arrayCount[4] === arrayCount[8]) {
      winner = arrayCount[0];
    } else if (arrayCount[2] === arrayCount[4] && arrayCount[4] === arrayCount[6]) {
      winner = arrayCount[2];
    } 
    if (winner === 'X' || winner === 'O') 
  
    {
    var winnerTitle = document.getElementById('winner');
    if (winner === 'X') {
      winnerTitle.innerHTML = name2 + ' Wins!'; 
    }
    if (winner === 'O') {
      winnerTitle.innerHTML = name1 + ' Wins!';
    }

    setTimeout(function(){endGame()}, "3000");
  } 
  }
    
  
});

function endGame() {
  started = 0;
 count = 0;
 arrayCount = ['', '', '', '', '', '', '', '', ''] ;
 winner = 0;
 document.getElementById('0').innerHTML = '';
 document.getElementById('1').innerHTML = '';
 document.getElementById('2').innerHTML = '';
 document.getElementById('3').innerHTML = '';
 document.getElementById('4').innerHTML = '';
 document.getElementById('5').innerHTML = '';
 document.getElementById('6').innerHTML = '';
 document.getElementById('7').innerHTML = '';
 document.getElementById('8').innerHTML = '';
 document.getElementById('winner').innerHTML = '';
 startbtn.style.setProperty('disabled', 'true');
 single.style.setProperty('backgound-color', 'lightgrey');
 multiple.style.setProperty('background-color', 'lightgrey');
}

// const players = ['x', 'o'];
//  const currentPlayer = players1;
//  const board = [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null],
//        ]

// const winning = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

// function winningFunction() {
//   for (let i = 0; i < winning.length; i++) {
//     for (let j = 0; j < winning[i].length; j++) {
//         let match = indexof(winning[i]);
//         if (winning = match);
//     }
//   } 
// }



function clickbtn(btnid)  {
  startbtn.disabled = false;
  var buttonClicked = document.getElementById(btnid);
  buttonClicked.style.backgroundColor = 'green'; 
  if (buttonClicked === single) {
    multiple.style.setProperty('background-color', 'lightgrey');
    playernum = 'single';
  }
  else if ( buttonClicked === multiple) { 
    single.style.setProperty('background-color', 'lightgrey');
    playernum = 'multiple';
  }
}

function startGame(){
if (playernum === 'multiple') {
started = true;
var inputParent = document.getElementById('nameinput');
var player1label = document.createElement('label');
var player2label = document.createElement('label');
var player1input = document.createElement('input');
var player2input = document.createElement('input');
var savebtn = document.createElement('button');
player1label.innerHTML = 'player-1 Name';
player2label.innerHTML = 'player-2 Name';
player1input.setAttribute("type","text");
player1input.setAttribute('id', 'inputone');
player2input.setAttribute('id', 'inputtwo');
player2input.setAttribute("type", "text");
inputParent.appendChild(player1label);
inputParent.appendChild(player1input);
inputParent.innerHTML += '<br><br>';
inputParent.appendChild(player2label);
inputParent.appendChild(player2input);
inputParent.innerHTML += '<br><br>';
inputParent.appendChild(savebtn);
savebtn.innerHTML = 'Save';

savebtn.onclick = function() {
  saveName()
}; 

}
}

function saveName () {
    name1 = document.getElementById('inputone').value;
    name2 = document.getElementById('inputtwo').value;
    var inputParent = document.getElementById('nameinput');
    while(inputParent.firstChild) {
      inputParent.removeChild(inputParent.firstChild);
    }

}