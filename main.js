//TEAM ARRAY
var teamA = ['Aston Villa', 'Liverpool', 'Galatasaray', 'Napoli'];
var teamB =['Psg', 'Sevilla', 'Man Utd', 'Fulham']
var teamC = ['Ajax', 'Man-City', 'Bayern Munich', 'Lyon']
var teamD = ['Chealsea','Barcelona','New Castle','Benfica',]

//HTML CONNECT
var listA = document.getElementById("GroupA");
var listB = document.getElementById("GroupB");
var listC = document.getElementById("GroupC");
var listD = document.getElementById("GroupD");

//HTML CONNECT QUATER FINALS
var quaterFinalA1 = document.getElementById('gameA1');
var quaterFinalC2 = document.getElementById('gameAC11');

var quaterFinalA2 = document.getElementById('gameAC2');
var quaterFinalD1 = document.getElementById('gameAC22');

var quaterFinalB1 = document.getElementById('gameBD1');
var quaterFinalD2 = document.getElementById('gameBD11');

var quaterFinalB2 = document.getElementById('gameBD2');
var quaterFinalC1 = document.getElementById('gameBD22');





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
let ptsA= [put[0], put[1], put[2], put[3]]
let ptsB= [put[1], put[6], put[5], put[4]]
let ptsC= [put[3], put[2], put[9], put[7]]
let ptsD= [put[8], put[3], put[7], put[4]]


var finalSorted = [];
function sortPts(array){
  array.sort((a, b) => b-a)  
}
sortPts(ptsA)
sortPts(ptsB)
sortPts(ptsC)
sortPts(ptsD)


//GROUP STAGE TEAM DRAWS

function draws(team, points, connect,){
  var draw = [];
  while (team.length > 0) {
    var randomIndex = Math.floor(Math.random() * team.length);
    var removedElement = team.splice(randomIndex, 1)[0];
    draw.push(removedElement);
  }
  
  var listContent = "";
  for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + points[i] +"</li>" +"</ul>";
    }

   
   connect.innerHTML = listContent;
   
   //QUATER FINALS FUNCTION

function quater(qf1, qf2){
  var quater1 = "";
  var quater2 ="";
  for(let j=0; j< 1; j++){
   quater1 += draw[i]
 }
 for(let k=1; k< 2; k++){
   quater2 += draw[i]
}
qf1.innerHTML = quater1;
 qf2.innerHTML = quater2;
}
  


 



}
draws(teamA, ptsA, listA)
draws(teamB, ptsB, listB)
draws(teamC, ptsC, listC)
draws(teamD, ptsD, listD)



//QUATER FINALS TEAM DRAWS






   
   

    
 

  
    var quatergame = "";
  for(let j=0; j< 1; j++){
    quatergame += draw[j]
    
  }
  const quaterFinal1 = document.getElementById('gameAC1');
    quaterFinal1.innerHTML = quatergame;




  // Update the content of the "team-list" element
 