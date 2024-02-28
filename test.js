var teamA = ['Barcelona', 'Liverpool', 'Benfica', 'Man-City'];
var teamB =['Psg', 'Sevilla', 'Man Utd', 'Fulham']
var teamC = ['Ajax', 'Napoli', 'Bayern Munich', 'Lyon']
var teamD = ['Aston Villa','Chealsea','New Castle','Galatasaray',]


var ListA = document.getElementById("GroupA");
var ListB = document.getElementById("GroupB");
var ListC = document.getElementById("GroupC");
var ListD = document.getElementById("GroupD");

//POINTS
var pts = [0,1,2,3,4,5,6,7,8,9,10]
var put= []
  while(pts.length > 0){
  let random = Math.floor(Math.random() * pts.length)
  let sort = pts.splice(random, 1) [0];
  put.push(sort);
}
for(let i = 0; i < pts.length; i++){
  console.log(pts[i])
}
//Putty
let puttyA= [put[0], put[1], put[2], put[3]]
let puttyB= [put[1], put[6], put[5], put[4]]
let puttyC= [put[3], put[2], put[9], put[7]]
let puttyD= [put[8], put[3], put[7], put[4]]
//Sort Putty

var finalSorted = [];
function sortPts(array){
  array.sort((a, b) => b-a)  
}
sortPts(puttyA)
sortPts(puttyB)
sortPts(puttyC)
sortPts(puttyD)



function groupA(team){
   
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }

    
    var listContent = "";
    for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + puttyA[i] +"</li>" +"</ul>";
    }
  
  
  // Update the content of the "team-list" element
  ListA.innerHTML = listContent;

}


function groupB(team){
    
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }
    var listContent = "";
    for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + puttyB[i] +"</li>" +"</ul>";
    }


  // Update the content of the "team-list" element
  ListB.innerHTML = listContent;
}

function groupC(team){
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }
    
    var listContent = "";
    for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + puttyB[i] +"</li>" +"</ul>";
    }
    
  
  // Update the content of the "team-list" element
  ListC.innerHTML = listContent;
}

function groupD(team){
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }
    var listContent = "";
    for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + puttyD[i] +"</li>" +"</ul>";
    }
    
  
  // Update the content of the "team-list" element
  ListD.innerHTML = listContent;
}

//Function Calls
groupA(teamA);
groupB(teamB);
groupC(teamC);
groupD(teamD);






