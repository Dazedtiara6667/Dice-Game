var diceno = Math.floor(Math.random()*6)+1;
var diceno1 = Math.floor(Math.random()*6)+1;

if(diceno==1){
  document.getElementById('img1').src="images/dice1.png";
}
else if(diceno==2){
  document.getElementById('img1').src="images/dice2.png";
}else if(diceno==3){
  document.getElementById('img1').src="images/dice3.png";
}
else if(diceno==4){
  document.getElementById('img1').src="images/dice4.png";
}
else if(diceno==5){
  document.getElementById('img1').src="images/dice5.png";
}
else if(diceno==6){
  document.getElementById('img1').src="images/dice6.png";
}
if(diceno1==1){
  document.getElementById('img2').src="images/dice1.png";
}
else if(diceno1==2){
  document.getElementById('img2').src="images/dice2.png";
}else if(diceno1==3){
  document.getElementById('img2').src="images/dice3.png";
}
else if(diceno1==4){
  document.getElementById('img2').src="images/dice4.png";
}
else if(diceno1==5){
  document.getElementById('img2').src="images/dice5.png";
}
else if(diceno1==6){
  document.getElementById('img2').src="images/dice6.png";
}
if(diceno1>diceno){
  document.getElementById('changetext').innerHTML = "Player2 won";

}
else if(diceno>diceno1){
  document.getElementById('changetext').innerHTML = "Player 1 won";
}
else if(diceno==diceno1){
  document.getElementById('changetext').innerHTML = 'Tie';
}
