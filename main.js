var teamA = ['Aston Villa', 'Liverpool', 'Galatasaray', 'Napoli'];
var teamB =['Psg', 'Sevilla', 'Man Utd', 'Dortmund']
var teamC = ['Ajax', 'Man-City', 'Bayern Munich', 'Lyon']
var teamD = ['Chealsea','Barcelona','New Castle','Benfica',]


var groupABox = document.getElementById("GroupA");

var groupBBox = document.getElementById("GroupB")






class FootballLeague{
  constructor(team1, team2, team3, team4){
    this.team1 = team1
    this.team2 = team2
    this.team3 = team3
    this.team4 = team4
  }
  pointerCreator(){
    let points = Math.floor(Math.random() * 8)
    return points
  }

  orderRanking(){
    let pointsA = [];
    for (let i = 0; i < 4; i++) {
      pointsA.push(Math.floor(Math.random() * 8));
    }
    
    pointsA.sort((a, b) => b - a);
    
    let herePoints = [];
    for (let i = 0; i < 4; i++) {
      herePoints.push(pointsA[i]);
    }
    
    return herePoints;
  }    

  displayTeams(connect){
    connect.innerHTML = "<ol>"+this.team1
    connect.innerHTML += "<ol>"+this.team2
    connect.innerHTML += "<ol>"+this.team3
    connect.innerHTML += "<ol>"+this.team4
  }
}

const groupA = new FootballLeague("liverpool","Barcelona", "Sevilla", "Arsenal")
groupA.displayTeams(groupABox)

const groupB = new FootballLeague('Psg', 'Sevilla', 'Man Utd', 'Dortmund')
groupB.displayTeams(groupBBox)

// groupA.teamPoint()
// groupA.display(groupABox)






// let pointsA = [];
// for(let i = 0; i < 4; i++){
//   pointsA.push(Math.floor(Math.random() * 8));
// }

// pointsA.sort((a, b) => b - a);

// for(let i = 0; i < 4; i++){
//   console.log(pointsA[i]);
// }
