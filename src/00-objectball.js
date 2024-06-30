function gameObject(){
    return{
        home:{
            teamName:"Brooklyn",
            colors:["Black", "White"],
            players:{
                "Alan Anderson":{
                    Number:0,
                    Shoe:16,
                    Points:22,
                    Rebounds:12,
                    Assits:12,
                    Steals:3,
                    blocks:1,
                    SlamDunks:1
                },
                "Reggie Evans":{
                    Number:30,
                    Shoe:14,
                    Points:12,
                    Rebounds:12,
                    Assits:12,
                    Steals:12,
                    Blocks:12,
                    SlamDunks:7,
                },
                "Brook Lopez":{
                    Number:11,
                    Shoe:17,
                    Points:17,
                    Rebounds:19,
                    Assits:10,
                    Steals:3,
                    Blocks:1,
                    SlamDunks:15,
                },
                "Mason Plumlee":{
                    Number:1,
                    Shoe:19,
                    points:26,
                    Rebounds:12,
                    Assits:6,
                    Steals:3,
                    Blocks:8,
                    SlamDunks:5,
                },
                "Jason Terry":{
                    Number:31,
                    Shoe:15,
                    Points:19,
                    Rebounds:2,
                    Assits:2,
                    Steals:4,
                    Blocks:11,
                    SlamDunks:1,
                }
                }

        },
        away:{
    teamName:"Charlotte Hornets",
    Colors:["Turquoise","Purple"],
    players:{
        "Jeff Adrien":{
            Number:4,
            Shoe:18,
            Points:10,
            Rebounds:1,
            Assits:1,
            Steals:2,
            Blocks:7,
            SlamDunks:2,
        },
        "Bismak Biyombo":{
            Number:0,
            Shoe:16,
            Points:12,
            Rebounds:4,
            Assits:7,
            Steals:7,
            Blocks:15,
            SlamDunks:10,
        },
        "DeSagna Diop":{
            Number:2,
            Shoe:14,
            Points:24,
            Rebounds:12,
            Assits:12,
            Steals:4,
            Blocks:5,
            SlamDunks:5,
        },
        "Ben Gordon":{
            Number:8,
            Shoe:15,
            Points:33,
            Rebounds:3,
            Assits:2,
            Steals:1,
            Blocks:1,
            SlamDunks:0,
        },
        "Brendan Haywood":{
            Number:33,
            Shoe:15,
            Points:6,
            Rebounds:12,
            Assits:12,
            Steals:22,
            Blocks:5,
            SlamDunks:12,
        }
    }
        }
    }
}
function numPointsScored(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player].points;
        }
      }
    }
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player].shoe;
        }
      }
    }
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      if (team.teamName === teamName) {
        return team.colors;
      }
    }
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      if (team.teamName === teamName) {
        return Object.values(team.players).map(player => player.number);
      }
    }
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (player === playerName) {
          return team.players[player];
        }
      }
    }
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = -Infinity;
    let playerWithMaxShoeSize = null;
  

    for (let teamKey in game) {
      let team = game[teamKey];
      for (let player in team.players) {
        if (team.players[player].shoe > maxShoeSize) {
          maxShoeSize = team.players[player].shoe;
          playerWithMaxShoeSize = player;
        }
      }
    }
  
    
    return game.home.players[playerWithMaxShoeSize].rebounds || game.away.players[playerWithMaxShoeSize].rebounds;
  }
  
  
  console.log(numPointsScored("Alan Anderson")); 
  console.log(shoeSize("Ben Gordon")); 
  console.log(teamColors("Charlotte Hornets")); 
  console.log(teamNames()); 
  console.log(playerNumbers("Brooklyn Nets"));  
  console.log(playerStats("Jason Terry"));
  console.log(bigShoeRebounds()); 