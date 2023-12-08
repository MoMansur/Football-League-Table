
//football group stage


var A = Math.floor(Math.random() * 10) 
var B = Math.floor(Math.random() * 10)
var C = Math.floor(Math.random() * 10)
var D = Math.floor(Math.random() * 10)



groupA('Liverpool', 'Barcelona', 'Arsenal', 'Man City');
groupB('Psg', 'Sevilla', 'Man Utd', 'Fulham')
groupC('Ajax','Napoli','Bayern Munich','Lyon',)
groupD('Aston Villa','Chealsea','New Castle','Galatasaray',)

function groupA(team1, team2, team3, team4){


 console.log('GROUP A: TABLE')


let firstA = () => {
if(A >= B && A >= C && A >= D){
    return `1. ${team1} - ${A}pts`;
}else if(B >= A && B >= C && B >= D){
     return `1. ${team2} - ${B}pts`
}else if(C >= B && C >= A && C >= D){
    return `1. ${team3} - ${C}pts` 
}else if(D >= B && D >= C && D >= A){
    return`1. ${team4} - ${D}pts`
}

}


//SECOND PLACE
//SECOND PLACE

let secondA = () => {
if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    return `2. ${team1} - ${A}pts`
}else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    return`2. ${team2} - ${B}pts`;
}else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
   return `2. ${team3} - ${C}pts`;
}else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
   return `2. ${team4} - ${D}pts`
}
}



//THIRD PLACE
let thridA = () => {
if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
   return `3. ${team1} - ${A}pts`;
}else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    return `3. ${team2} - ${B}pts`;
}else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
    return `3. ${team3} - ${C}pts`;
}else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    return `3. ${team4} - ${D}pts`;
}
}



//LAST PLACE
let fourthA = () => {
if(A <= B && A <= C && A <= D){
    return `4. ${team1} - ${A}pts`;
}else if( B <= A && B <= C && B <= D){
    return `4. ${team2} - ${B}pts`;
}else if( C <= B && C <= A && C <= D){
    return `4. ${team3} - ${C}pts`;
}else if(D <= B && D <= C && D <= A){
    return `4. ${team4} - ${D}pts`;
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


}




function groupB(team1, team2, team3, team4){


    console.log('GROUP B: TABLE')
   
   
   let firstB = () => {
   if(A >= B && A >= C && A >= D){
       return `1. ${team1} - ${A}pts`;
   }else if(B >= A && B >= C && B >= D){
        return `1. ${team2} - ${B}pts`
   }else if(C >= B && C >= A && C >= D){
       return `1. ${team3} - ${C}pts` 
   }else if(D >= B && D >= C && D >= A){
       return`1. ${team4} - ${D}pts`
   }
   
   }
   
   
   //SECOND PLACE
   //SECOND PLACE
   
   let secondB = () => {
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
       return `2. ${team1} - ${A}pts`
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
       return`2. ${team2} - ${B}pts`;
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
      return `2. ${team3} - ${C}pts`;
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
      return `2. ${team4} - ${D}pts`
   }
   }
   
   
   
   //THIRD PLACE
   let thridB = () => {
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
      return `3. ${team1} - ${A}pts`;
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
       return `3. ${team2} - ${B}pts`;
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
       return `3. ${team3} - ${C}pts`;
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
       return `3. ${team4} - ${D}pts`;
   }
   }
   
   
   
   //LAST PLACE
   let fourthB = () => {
   if(A <= B && A <= C && A <= D){
       return `4. ${team1} - ${A}pts`;
   }else if( B <= A && B <= C && B <= D){
       return `4. ${team2} - ${B}pts`;
   }else if( C <= B && C <= A && C <= D){
       return `4. ${team3} - ${C}pts`;
   }else if(D <= B && D <= C && D <= A){
       return `4. ${team4} - ${D}pts`;
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
   
   
   }

   function groupC(team1, team2, team3, team4){


    console.log('GROUP B: TABLE')
   
   
   let firstC = () => {
   if(A >= B && A >= C && A >= D){
       return `1. ${team1} - ${A}pts`;
   }else if(B >= A && B >= C && B >= D){
        return `1. ${team2} - ${B}pts`
   }else if(C >= B && C >= A && C >= D){
       return `1. ${team3} - ${C}pts` 
   }else if(D >= B && D >= C && D >= A){
       return`1. ${team4} - ${D}pts`
   }
   
   }
   
   
   //SECOND PLACE
   //SECOND PLACE
   
   let secondC = () => {
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
       return `2. ${team1} - ${A}pts`
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
       return`2. ${team2} - ${B}pts`;
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
      return `2. ${team3} - ${C}pts`;
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
      return `2. ${team4} - ${D}pts`
   }
   }
   
   
   
   //THIRD PLACE
   let thridC = () => {
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
      return `3. ${team1} - ${A}pts`;
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
       return `3. ${team2} - ${B}pts`;
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
       return `3. ${team3} - ${C}pts`;
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
       return `3. ${team4} - ${D}pts`;
   }
   }
   
   
   
   //LAST PLACE
   let fourthC = () => {
   if(A <= B && A <= C && A <= D){
       return `4. ${team1} - ${A}pts`;
   }else if( B <= A && B <= C && B <= D){
       return `4. ${team2} - ${B}pts`;
   }else if( C <= B && C <= A && C <= D){
       return `4. ${team3} - ${C}pts`;
   }else if(D <= B && D <= C && D <= A){
       return `4. ${team4} - ${D}pts`;
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
   
   
   }

   
function groupD(team1, team2, team3, team4){


    console.log('GROUP B: TABLE')
   
   
   let firstD = () => {
   if(A >= B && A >= C && A >= D){
       return `1. ${team1} - ${A}pts`;
   }else if(B >= A && B >= C && B >= D){
        return `1. ${team2} - ${B}pts`
   }else if(C >= B && C >= A && C >= D){
       return `1. ${team3} - ${C}pts` 
   }else if(D >= B && D >= C && D >= A){
       return`1. ${team4} - ${D}pts`
   }
   
   }
   
   
   //SECOND PLACE
   //SECOND PLACE
   
   let secondD = () => {
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
       return `2. ${team1} - ${A}pts`
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
       return`2. ${team2} - ${B}pts`;
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
      return `2. ${team3} - ${C}pts`;
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
      return `2. ${team4} - ${D}pts`
   }
   }
   
   
   
   //THIRD PLACE
   let thridD = () => {
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
      return `3. ${team1} - ${A}pts`;
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
       return `3. ${team2} - ${B}pts`;
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
       return `3. ${team3} - ${C}pts`;
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
       return `3. ${team4} - ${D}pts`;
   }
   }
   
   
   
   //LAST PLACE
   let fourthD = () => {
   if(A <= B && A <= C && A <= D){
       return `4. ${team1} - ${A}pts`;
   }else if( B <= A && B <= C && B <= D){
       return `4. ${team2} - ${B}pts`;
   }else if( C <= B && C <= A && C <= D){
       return `4. ${team3} - ${C}pts`;
   }else if(D <= B && D <= C && D <= A){
       return `4. ${team4} - ${D}pts`;
   }
   }
   
   const firstdElement = document.getElementById('firstD');
   firstdElement.innerHTML = firstD();
   
       const seconddElement = document.getElementById('secondD');
       seconddElement.innerHTML = secondD();
   
       const thirddElement = document.getElementById('thirdD');
       thirddElement.innerHTML = thridD();
   
       const fourthdElement = document.getElementById('fourthD');
       fourthdElement.innerHTML = fourthD();
   
   
   }