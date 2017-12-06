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
        playerOne.score = participants[i].stats.score;
        playerOne.damageDone = participants[i].stats.damageDone;
        playerOne.disablesDone = participants[i].stats.disablesDone;
        playerOne.healingDone = participants[i].stats.healingDone;
        playerOne.kills = participants[i].stats.kills;
        playerOne.deaths = participants[i].stats.deaths;
        playerOne.champion = getChampionByID(participants[i].actor);
      }
      if(i==1){
        playerTwo.score = participants[i].stats.score;
        playerTwo.damageDone = participants[i].stats.damageDone;
        playerTwo.disablesDone = participants[i].stats.disablesDone;
        playerTwo.healingDone = participants[i].stats.healingDone;
        playerTwo.kills = participants[i].stats.kills;
        playerTwo.deaths = participants[i].stats.deaths;
        playerTwo.champion = getChampionByID(participants[i].actor);
      }
      if(i==2){
        playerThree.score = participants[i].stats.score;
        playerThree.damageDone = participants[i].stats.damageDone;
        playerThree.disablesDone = participants[i].stats.disablesDone;
        playerThree.healingDone = participants[i].stats.healingDone;
        playerThree.kills = participants[i].stats.kills;
        playerThree.deaths = participants[i].stats.deaths;
        playerThree.champion = getChampionByID(participants[i].actor);
      }
      if(i==3){
        playerfour.score = participants[i].stats.score;
        playerfour.damageDone = participants[i].stats.damageDone;
        playerfour.disablesDone = participants[i].stats.disablesDone;
        playerfour.healingDone = participants[i].stats.healingDone;
        playerfour.kills = participants[i].stats.kills;
        playerfour.deaths = participants[i].stats.deaths;
        playerfour.champion = getChampionByID(participants[i].actor);
      }
      if(participants.length>4){
        if(i==4){
          playerFive.score = participants[i].stats.score;
          playerFive.damageDone = participants[i].stats.damageDone;
          playerFive.disablesDone = participants[i].stats.disablesDone;
          playerFive.healingDone = participants[i].stats.healingDone;
          playerFive.kills = participants[i].stats.kills;
          playerFive.deaths = participants[i].stats.deaths;
          playerFive.champion = getChampionByID(participants[i].actor);
        }
        if(i==5){
          playerSix.score = participants[i].stats.score;
          playerSix.damageDone = participants[i].stats.damageDone;
          playerSix.disablesDone = participants[i].stats.disablesDone;
          playerSix.healingDone = participants[i].stats.healingDone;
          playerSix.kills = participants[i].stats.kills;
          playerSix.deaths = participants[i].stats.deaths;
          playerSix.champion = getChampionByID(participants[i].actor);
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
    document.getElementById("playerOneStats").innerHTML += "Kills: " + playersArray[0].kills + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Deaths: " + playersArray[0].deaths + "<br />";
    document.getElementById("playerOneStats").innerHTML += "Deaths: " + playersArray[0].champion + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Score: " + playersArray[1].score + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Damage Done: " + playersArray[1].damageDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Disables Done: " + playersArray[1].disablesDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Healing Done: " + playersArray[1].healingDone + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Kills: " + playersArray[1].kills + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Deaths: " + playersArray[1].deaths + "<br />";
    document.getElementById("playerTwoStats").innerHTML += "Deaths: " + playersArray[1].champion + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Score: " + playersArray[2].score + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Damage Done: " + playersArray[2].damageDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Disables Done: " + playersArray[2].disablesDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Healing Done: " + playersArray[2].healingDone + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Kills: " + playersArray[2].kills + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Deaths: " + playersArray[2].deaths + "<br />";
    document.getElementById("PlayerThreeStats").innerHTML += "Deaths: " + playersArray[2].champion + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Score: " + playersArray[3].score + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Damage Done: " + playersArray[3].damageDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Disables Done: " + playersArray[3].disablesDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Healing Done: " + playersArray[3].healingDone + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Kills: " + playersArray[3].kills + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Deaths: " + playersArray[3].deaths + "<br />";
    document.getElementById("playerFourStats").innerHTML += "Deaths: " + playersArray[3].champion + "<br />";
    document.getElementById("mapName").innerHTML = "Map: " + sessionStorage.mapName;
}
