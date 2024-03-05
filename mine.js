
//Football group stage


let A = Math.floor(Math.random() * 10) 
let B = Math.floor(Math.random() * 10)
let C = Math.floor(Math.random() * 10)
let D = Math.floor(Math.random() * 10)



groupA(['Liverpool', 'Barcelona', 'Arsenal', 'Man City']);
groupB('Psg', 'Sevilla', 'Man Utd', 'Fulham')
groupC('Ajax','Napoli','Bayern Munich','Lyon',)
groupD('Aston Villa','Chealsea','New Castle','Galatasaray',)

function groupA([team1, team2, team3, team4]){

    const A = Math.floor(Math.random() * 10) 
    const B = Math.floor(Math.random() * 10)
    const C = Math.floor(Math.random() * 10)
    const D = Math.floor(Math.random() * 10)


 let firstA = () => {
    if(A >= B && A >= C && A >= D){
        return team1 
    }else if(B >= A && B >= C && B >= D){
         return team2
    }else if(C >= B && C >= A && C >= D){
        return  team3
    }else if(D >= B && D >= C && D >= A){
        return team4
    }
    
    }
    
   
    
    //SECOND PLACE
    //SECOND PLACE
    
    let secondA = () => {
    if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
     return team1
    }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
     return team2
    }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
     return team3
    }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
     return team4
    }
    }
    
    
    
    //THIRD PLACE
    let thridA = () => {
    if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
     return team1
    }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
     return team2
    }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
     return team3
    }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
     return team4
    }
    }
    
    
    
    //LAST PLACE
    let fourthA = () => {
    if(A <= B && A <= C && A <= D){
     return team1
    }else if( B <= A && B <= C && B <= D){
     return team2
    }else if( C <= B && C <= A && C <= D){
     return team3
    }else if(D <= B && D <= C && D <= A){
     return team4
    }
    }


    let point = () =>{
        if(firstA() === A || secondA() === A || thridA() === A || fourthA() === A){
            return A;
        }else if(firstA() === B || secondA() === B || thridA() === B || fourthA() === B){
            return B;
        }else if(firstA() === C || secondA() === C || thridA() === C || fourthA() === C){
            return C;
        }else if(firstA() === D || secondA() === D || thridA() === D || fourthA() === D){
            return D;
        }
    }
 


const firstaElement = document.getElementById('first');
    firstaElement.innerHTML = firstA();

    const firstbElement = document.getElementById('second');
    firstbElement.innerHTML = secondA();

    const firstcElement = document.getElementById('third');
    firstcElement.innerHTML = thridA();

    const firstdElement = document.getElementById('fourth');
    firstdElement.innerHTML = fourthA();



//QUATER FINALS

var quatergame1Element = document.getElementById('gameAC1');
quatergame1Element.innerHTML = firstA();

const quatergame2Element = document.getElementById('gameAC2');
quatergame2Element.innerHTML = secondA() ;


console.log(firstA())
    console.log(secondA())
    console.log(thridA())
    console.log(fourthA())    

    let hom = Math.floor(Math.random() * 5)
    let awy = Math.floor(Math.random() * 5)

   


}





function groupB(team1, team2, team3, team4){

    const A = Math.floor(Math.random() * 10) 
    const B = Math.floor(Math.random() * 10)
    const C = Math.floor(Math.random() * 10)
    const D = Math.floor(Math.random() * 10)

    console.log('GROUP B: TABLE')
   
   
   let firstB = () => {
   if(A >= B && A >= C && A >= D){
       return team1
   }else if(B >= A && B >= C && B >= D){
        return team2
   }else if(C >= B && C >= A && C >= D){
       return  team3
   }else if(D >= B && D >= C && D >= A){
       return team4
   }
   
   }
   
   
   //SECOND PLACE
   //SECOND PLACE
   
   let secondB = () => {
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    return team1
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    return team2
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
    return team3
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
    return team4
   }
   }
   
   
   
   //THIRD PLACE
   let thridB = () => {
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
    return team1
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    return team2
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
    return team3
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    return team4
   }
   }
   
   
   
   //LAST PLACE
   let fourthB = () => {
   if(A <= B && A <= C && A <= D){
    return team1
   }else if( B <= A && B <= C && B <= D){
    return team2
   }else if( C <= B && C <= A && C <= D){
    return team3
   }else if(D <= B && D <= C && D <= A){
    return team4
   }
   }
   
   const gpraElement = document.getElementById('firstB');
   gpraElement.innerHTML = firstB();
   
       const grpbElement = document.getElementById('secondB');
       grpbElement.innerHTML = secondB();
   
       const grbcElement = document.getElementById('thirdB');
       grbcElement.innerHTML = thridB();
   
       const grbdElement = document.getElementById('fourthB');
       grbdElement.innerHTML = fourthB();
   

       const quatergame3Element = document.getElementById('gameBD1');
quatergame3Element.innerHTML = firstB();

const quatergame4Element = document.getElementById('gameBD2');
quatergame4Element.innerHTML = secondB();

   //points

const pointaElement = document.getElementById('ptsB1');
pointaElement.innerHTML = '-- '+A + 'pts';
const pointa2Element = document.getElementById('ptsB2');
pointa2Element.innerHTML = '-- '+B + 'pts';
const pointa3Element = document.getElementById('ptsB3');
pointa3Element.innerHTML = '-- '+C + 'pts';
const pointa4Element = document.getElementById('ptsB4');
pointa4Element.innerHTML = '-- '+D + 'pts';
       
   }

function groupC(team1, team2, team3, team4){


    const A = Math.floor(Math.random() * 10) 
    const B = Math.floor(Math.random() * 10)
    const C = Math.floor(Math.random() * 10)
    const D = Math.floor(Math.random() * 10)

   
    let firstC = () => {
        if(A >= B && A >= C && A >= D){
            return team1
        }else if(B >= A && B >= C && B >= D){
             return team2
        }else if(C >= B && C >= A && C >= D){
            return  team3
        }else if(D >= B && D >= C && D >= A){
            return team4
        }
        
        }
        
        
        //SECOND PLACE
        //SECOND PLACE
        
        let secondC = () => {
        if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
         return team1
        }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
         return team2
        }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
         return team3
        }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
         return team4
        }
        }
        
        
        
        //THIRD PLACE
        let thridC = () => {
        if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
         return team1
        }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
         return team2
        }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
         return team3
        }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
         return team4
        }
        }
        
        
        
        //LAST PLACE
        let fourthC = () => {
        if(A <= B && A <= C && A <= D){
         return team1
        }else if( B <= A && B <= C && B <= D){
         return team2
        }else if( C <= B && C <= A && C <= D){
         return team3
        }else if(D <= B && D <= C && D <= A){
         return team4
        }
        }
   
   const firstcElement = document.getElementById('firstC');
   firstcElement.innerHTML = firstC();
   
       const secondcElement = document.getElementById('secondC');
       secondcElement.innerHTML = secondC();
   
       const thirdcElement = document.getElementById('thirdC');
       thirdcElement.innerHTML = thridC();
   
       const fourthdElement = document.getElementById('fourthC');
       fourthdElement.innerHTML = fourthC();
   


       const quatergame1Element = document.getElementById('gameAC11');
    quatergame1Element.innerHTML = secondC();
    const quatergame2Element = document.getElementById('gameAC22');
    quatergame2Element.innerHTML = firstC();
   //POINTS

   const pointaElement = document.getElementById('ptsC1');
   pointaElement.innerHTML = '-- '+A + 'pts';
   const pointa2Element = document.getElementById('ptsC2');
   pointa2Element.innerHTML = '-- '+B + 'pts';
   const pointa3Element = document.getElementById('ptsC3');
   pointa3Element.innerHTML = '-- '+C + 'pts';
   const pointa4Element = document.getElementById('ptsC4');
   pointa4Element.innerHTML = '-- '+D + 'pts';



   }

   
function groupD(team1, team2, team3, team4){

    const A = Math.floor(Math.random() * 10) 
    const B = Math.floor(Math.random() * 10)
    const C = Math.floor(Math.random() * 10)
    const D = Math.floor(Math.random() * 10)

    let firstD = () => {
        if(A >= B && A >= C && A >= D){
            return team1
        }else if(B >= A && B >= C && B >= D){
             return team2
        }else if(C >= B && C >= A && C >= D){
            return  team3
        }else if(D >= B && D >= C && D >= A){
            return team4
        }
        
        }
        
        
        //SECOND PLACE
        //SECOND PLACE
        
        let secondD = () => {
        if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
         return team1
        }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
         return team2
        }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
         return team3
        }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
         return team4
        }
        }
        
        
        
        //THIRD PLACE
        let thridD = () => {
        if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
         return team1
        }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
         return team2
        }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
         return team3
        }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
         return team4
        }
        }
        
        
        
        //LAST PLACE
        let fourthD = () => {
        if(A <= B && A <= C && A <= D){
         return team1
        }else if( B <= A && B <= C && B <= D){
         return team2
        }else if( C <= B && C <= A && C <= D){
         return team3
        }else if(D <= B && D <= C && D <= A){
         return team4
        }
        }
   
   const firstdElement = document.getElementById('firstD');
   firstdElement.innerHTML = firstD() + "  " +` ${A}pts`;
   
       const seconddElement = document.getElementById('secondD');
       seconddElement.innerHTML = secondD();
   
       const thirddElement = document.getElementById('thirdD');
       thirddElement.innerHTML = thridD();
   
       const fourthdElement = document.getElementById('fourthD');
       fourthdElement.innerHTML = fourthD();
   

       const quatergame3Element = document.getElementById('gameBD11');
quatergame3Element.innerHTML = secondD();

const quatergame4Element = document.getElementById('gameBD22');
quatergame4Element.innerHTML = firstD();

//POINTS

const pointdElement = document.getElementById('ptsD1');
pointdElement.innerHTML = '-- '+A + 'pts';
const pointd2Element = document.getElementById('ptsD2');
pointd2Element.innerHTML = '-- '+B + 'pts';
const pointa3Element = document.getElementById('ptsD3');
pointa3Element.innerHTML = '-- '+C + 'pts';
const pointa4Element = document.getElementById('ptsD4');
pointa4Element.innerHTML = '-- '+D + 'pts';
   
   }

   
/* 

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






   
   

    
 
    /*
  
    var quatergame = "";
  for(let j=0; j< 1; j++){
    quatergame += draw[j]
    
  }
  const quaterFinal1 = document.getElementById('gameAC1');
    quaterFinal1.innerHTML = quatergame;




  // Update the content of the "team-list" element
 
*/











