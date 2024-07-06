function adduser(){
    player1 =document.getElementById("player1name").value;
    player2 =document.getElementById("player2name").value;
    localStorage.setItem("playername1" ,player1);
    localStorage.setItem("playername2" ,player2);
    window.location = "game_page.html";
  }