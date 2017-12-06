function storeStats(participants){
    var players = new Array();
    var playerOne = {}
    var playerTwo = {}
    var playerThree = {}
    var playerfour = {}
    var playerFive = {}
    var playerSix = {}
    for(let i=0;i<participants.length;i++){
      if(i==0){
        playerOne.score = participants[i].score;
        playerOne.damageDone = participants[i].damageDone;
        playerOne.disablesDone = participants[i].disablesDone;
        playerOne.healingDone = participants[i].healingDone;
        playerOne.kills = participants[i].kills;
        playerOne.deaths = participants[i].deaths;
      }
      if(i==1){
        playerTwo.score = participants[i].score;
        playerTwo.damageDone = participants[i].damageDone;
        playerTwo.disablesDone = participants[i].disablesDone;
        playerTwo.healingDone = participants[i].healingDone;
        playerTwo.kills = participants[i].kills;
        playerTwo.deaths = participants[i].deaths;
      }
      if(i==2){
        playerThree.score = participants[i].score;
        playerThree.damageDone = participants[i].damageDone;
        playerThree.disablesDone = participants[i].disablesDone;
        playerThree.healingDone = participants[i].healingDone;
        playerThree.kills = participants[i].kills;
        playerThree.deaths = participants[i].deaths;
      }
      if(i==3){
        playerfour.score = participants[i].score;
        playerfour.damageDone = participants[i].damageDone;
        playerfour.disablesDone = participants[i].disablesDone;
        playerfour.healingDone = participants[i].healingDone;
        playerfour.kills = participants[i].kills;
        playerfour.deaths = participants[i].deaths;
      }
      if(participants.length>4){
        if(i==4){
          playerFive.score = participants[i].score;
          playerFive.damageDone = participants[i].damageDone;
          playerFive.disablesDone = participants[i].disablesDone;
          playerFive.healingDone = participants[i].healingDone;
          playerFive.kills = participants[i].kills;
          playerFive.deaths = participants[i].deaths;
        }
        if(i==5){
          playerSix.score = participants[i].score;
          playerSix.damageDone = participants[i].damageDone;
          playerSix.disablesDone = participants[i].disablesDone;
          playerSix.healingDone = participants[i].healingDone;
          playerSix.kills = participants[i].kills;
          playerSix.deaths = participants[i].deaths;
        }
      }
    }
    players = {playerOne, playerTwo, playerThree, playerfour, playerFive, playerSix};
    players = JSON.stringify(players);
    sessionStorage.players = players;
    /*sessionStorage.playerOneScore = participants[i].score;
    sessionStorage.playerOneDamageDone = participants[i].damageDone;
    sessionStorage.playerOneDisablesDone = participants[i].disablesDone;
    sessionStorage.playerOneHealingDone = participants[i].healingDone;
    sessionStorage.playerOneKills = participants[i].kills;
    sessionStorage.playerOneDeaths = participants[i].deaths;*/
}

function getStats(){
    var playersObject = JSON.parse(sessionStorage.players);
    var playersArray = Object.values(playersObject);
    document.getElementById("playerOneStats").innerHTML = "Score: " + playersArray[0].score + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Damage Done: " + playersArray[0].damageDone + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Disables Done: " + playersArray[0].disablesDone + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Healing Done: " + playersArray[0].healingDone + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Kills: " + playersArray[0].Kills + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Deaths: " + playersArray[0].deaths + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Score: " + playersArray[1].score + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Damage Done: " + playersArray[1].damageDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Disables Done: " + playersArray[1].disablesDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Healing Done: " + playersArray[1].healingDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Kills: " + playersArray[1].Kills + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Deaths: " + playersArray[1].deaths + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Score: " + playersArray[2].score + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Damage Done: " + playersArray[2].damageDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Disables Done: " + playersArray[2].disablesDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Healing Done: " + playersArray[2].healingDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Kills: " + playersArray[2].Kills + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Deaths: " + playersArray[2].deaths + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Score: " + playersArray[3].score + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Damage Done: " + playersArray[3].damageDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Disables Done: " + playersArray[3].disablesDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Healing Done: " + playersArray[3].healingDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Kills: " + playersArray[3].Kills + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Deaths: " + playersArray[3].deaths + "<br />";

}
