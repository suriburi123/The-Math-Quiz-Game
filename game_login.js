function adduser(){
 Player1_name=document.getElementById("Player1_name_input").value;
 Player2_name=document.getElementById("Player2_name_input").value;
 localStorage.setItem("Player1_name", Player1_name);
 localStorage.setItem("Player2_name", Player2_name);
window.location="game_page.html";
}
Player1_name=localStorage.getItem("Player1_name");
Player2_name=localStorage.getItem("Player2_name");
player1_score=0;
player2_score=0;
document.getElementById("Player1_name").innerHTML=Player1_name+ ":";
document.getElementById("Player2_name").innerHTML=Player2_name+ ":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn-"+Player1_name;
document.getElementById("player_answer").innerHTML="Anwser Turn-"+Player2_name;

