apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjNzhiYjljMC1iNjQzLTAx' +
    'MzUtZGI4OS0wYTU4NjQ2MGE5MTAiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTExO' +
    'DU3NTk5LCJwdWIiOiJzdHVubG9jay1zdHVkaW9zIiwidGl0bGUiOiJiYXR0bGVyaXRlIi' +
    'wiYXBwIjoicml0ZWZvcmdlIiwic2NvcGUiOiJjb21tdW5pdHkiLCJsaW1pdCI6MTB9.nf' +
    'MLzNdM8CZH9KOvb12o-dZ9PCR6WMVnrgtxhPbInuU';

function getPlayers() {
    $.ajax({
        type: 'GET',
        url: 'https://api.dc01.gamelockerapp.com/shards/global/players',
        dataType: 'json',
        headers: {
            Authorization: apiKey,
            Accept: 'application/vnd.api+json'
        },
        success: function(json, status) {
            console.log(json);
        },
        error: function(jqXHR, status) {
            console.log('Error: ' + status);
        }
    });
}

function getPlayerById() {
    let input = document.getElementById('input');
    let playerId = input.value;
    $.ajax({
        type: 'GET',
        url: 'https://api.dc01.gamelockerapp.com/shards/na/players/' + playerId,
        dataType: 'json',
        headers: {
            Authorization: apiKey,
            Accept: 'application/vnd.api+json'
        },
        success: function(json, status) {
            console.log(json);
        },
        error: function(jqXHR, status) {
            console.log('Error: No Player Id was given.');
        }
    });
}

function getListOfMatches() {
    $.ajax({
        type: 'GET',
        url: 'https://api.dc01.gamelockerapp.com/shards/global/matches?sort=createdAt&page[limit]=5&filter[createdAt-end]',
        dataType: 'json',
        headers: {
            Authorization: apiKey,
            Accept: 'application/vnd.api+json'
        },
        success: function(json, status) {
            console.log(json);
        },
        error: function(jqXHR, status) {
            console.log('Error: ' + status);
        }
    });
}

function getListOfMatchIds() {
    $.ajax({
        type: 'GET',
        url: 'https://api.dc01.gamelockerapp.com/shards/global/matches',
        dataType: 'json',
        headers: {
            Authorization: apiKey,
            Accept: 'application/vnd.api+json'
        },
        success: function(json, status) {
            for (let i = 0; i < json.data.length; i++) {
                console.log(json.data[i].id);
            }
        },
        error: function(jqXHR, status) {
            console.log('Error: ' + status);
        }
    });
}

function getParticipantsStatsByMatchID() {
    let input = document.getElementById('input');
    let matchId = input.value;
    let participants = new Array();
    $.ajax({
        type: 'GET',
        url: 'https://api.dc01.gamelockerapp.com/shards/global/matches/' + matchId,
        dataType: 'json',
        headers: {
            Authorization: apiKey,
            Accept: 'application/vnd.api+json'
        },
        success: function(json, status) {
            let counter = 0;
            let inavlidMatch = false;
            for (let i = 0; i < json.included.length; i++) {
                if (json.included[i].type == 'participant'){
                  if(json.included[i].attributes.stats.abilityUses==undefined){
                    invalidMatch = true;
                    break;
                  } else {
                  participants[counter] = json.included[i].attributes.stats;
                  counter++;
                }
                }
            }
            participants.sort(function(a, b) {
                return a.side - b.side;
            });
            if(participants.length>0){
              console.log(participants);
              storeStats(participants);
              window.location.href = 'stats.html';
          } else alert('Invalid Match');
        },
        error: function(jqXHR, status) {
            console.log('Error: No Match ID was given.');
        }
    });
    clearMatchIdInput();
}

function clearMatchIdInput() {
    let input = document.getElementById('input');
    input.value = '';
}
