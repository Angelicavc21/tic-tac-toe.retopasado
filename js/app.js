
function startTicTacToe(){
//Allow to clean
  for(var i = 1; i<= 9; i++){
    comenzarNuevo(i);
  }
  document.turn = "X";
  document.winner = null;
  mostrar("TURN OF: "+document.turn);
};

function mostrar(msg){
  document.getElementById('message').innerText = msg;
}

function sgtMov(square){
  if(document.winner != null){
    mostrar("The winner was " +document.winner);
  }
  else if(square.innerHTML == ""){
  square.innerHTML = document.turn;
  cambiarTurno();
  }
  else{
  mostrar("This spaces was used");
  }
  }

