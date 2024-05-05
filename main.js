var teamA = ['Aston Villa', 'Liverpool', 'Galatasaray', 'Napoli'];
var teamB =['Psg', 'Sevilla', 'Man Utd', 'Dortmund']
var teamC = ['Ajax', 'Man-City', 'Bayern Munich', 'Lyon']
var teamD = ['Chealsea','Barcelona','New Castle','Benfica',]


var ListA = document.getElementById("GroupA");
var ListB = document.getElementById("GroupB");
var ListC = document.getElementById("GroupC");
var ListD = document.getElementById("GroupD");

//HTML CONNECT QUATER FINALS
var quaterFinalA1 = document.getElementById('gameA1');
var quaterFinalC2 = document.getElementById('gameC2');

var quaterFinalA2 = document.getElementById('gameA2');
var quaterFinalD1 = document.getElementById('gameD1');

var quaterFinalB1 = document.getElementById('gameB1');
var quaterFinalD2 = document.getElementById('gameD2');

var quaterFinalB2 = document.getElementById('gameB2');
var quaterFinalC1 = document.getElementById('gameC1');

//HTML CONNECT SEMI FINALS

var semi1 = document.getElementById('semi1');
var semi11 = document.getElementById('semi11');

var semi2 = document.getElementById('semi2');
var semi22 = document.getElementById('semi22');

//HTML CONNECT FINALS
var final1 = document.getElementById('final1');
var final2= document.getElementById('final2');


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

console.log(put)

//QF

//QUATER FINALS SCORE 
var scoreQ1 = Math.floor(Math.random() * 7)
var scoreQ2 = Math.floor(Math.random() * 7)

var scoreQ3 = Math.floor(Math.random() * 7)
var scoreQ4 = Math.floor(Math.random() * 7)

var scoreQ5 = Math.floor(Math.random() * 5)
var scoreQ6 = Math.floor(Math.random() * 5)

var scoreQ7 = Math.floor(Math.random() * 5)
var scoreQ8 = Math.floor(Math.random() * 5)



function quaterFinals(qCon1, qCon2, drw, scoreA, scoreB){
  qCon1.innerHTML = drw[0] + "<li>" + scoreA + "</li>"
  qCon2.innerHTML = drw[1] +"<li>" + scoreB+ "</li>"
}
function quaterFinalsB(qCon1, qCon2, drw, scoreA, scoreB){
  qCon1.innerHTML =  "<li>" + scoreA + "</li>"+drw[0] 
  qCon2.innerHTML =  "<li>" + scoreB+ "</li>"+drw[1]

  if(scoreA === scoreB){
   
    quaterFinalsB()
  }
}



//SEMI FINALS///////////////////////

function semiFinal(score1, score2, semiC1, semiC2, drw){
  if(score1 >= score2){
    semiC1.innerHTML = drw[0] + "<li>" + "</li>"
  }else{
    semiC2.innerHTML = drw[1] +"<li>" + "</li >"  
  }
}


//GROUP STAGE FUNCTION
function groupA(team){
   
    var draw = [];
    while (team.length > 0) {
      var randomIndex = Math.floor(Math.random() * team.length);
      var removedElement = team.splice(randomIndex, 1)[0];
      draw.push(removedElement);
    }

    
    var listContent = "";
    for (let i = 0; i < draw.length; i++) {
      listContent += "<ul>" + draw[i] + "<li>" + ptsA[i] +"</li>" +"</ul>";
    }
  ListA.innerHTML = listContent;

  //quater finals
  quaterFinals(quaterFinalA1, quaterFinalA2, draw, scoreQ1, scoreQ2)

  //SEMI FINALS
semiFinal(scoreQ1, scoreQ6, semi1, semi1, draw ) //A1-C2(semi-1)
semiFinal(scoreQ1, scoreQ6, semi11, semi11, draw ) //A2-D2 (Semi-11)


//FINALS
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
      listContent += "<ul>" + draw[i] + "<li>" + ptsB[i] +"</li>" +"</ul>";
    }


  // Update the content of the "team-list" element
  ListB.innerHTML = listContent;

  quaterFinals(quaterFinalB1, quaterFinalB2, draw, scoreQ3, scoreQ4)


  semiFinal(scoreQ3, scoreQ8, semi2, semi2, draw ) //B1-D2 (Semi-2)


  
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
      listContent += "<ul>" + draw[i] + "<li>" + ptsC[i] +"</li>" +"</ul>";
    }
  
  ListC.innerHTML = listContent;

  quaterFinalsB(quaterFinalC1, quaterFinalC2, draw, scoreQ5, scoreQ6)



//SEMI FINALS
semiFinal(scoreQ1, scoreQ6, semi1, semi11, draw )
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
      listContent += "<ul>" + draw[i] + "<li>" + ptsD[i] +"</li>" +"</ul>";
    }
    
  
  // Update the content of the "team-list" element
  ListD.innerHTML = listContent;

  quaterFinalsB(quaterFinalD1, quaterFinalD2, draw, scoreQ7, scoreQ8)


  //d1, d2
  semiFinal(scoreQ1, scoreQ6, semi1, semi11, draw )
}

//Function Calls
groupA(teamA);
groupB(teamB);
groupC(teamC);
groupD(teamD);



  //semi-1 A1, C2

//semi 11 A2,D1


//b1-d2 semi- 2

//b2 - c1

















