
//football group stage


var A = Math.floor(Math.random() * 10) 
var B = Math.floor(Math.random() * 10)
var C = Math.floor(Math.random() * 10)
var D = Math.floor(Math.random() * 10)







const firstbElement = document.getElementById('firstB');
    firstbElement.innerHTML = groupA('ss', 'sssdd', 'dddd', 'dddd City');



groupA('Liverpool', 'Barcelona', 'Arsenal', 'Man City');
groupB('Psg', 'Sevilla', 'Man Utd', 'Fulham')
groupC('Ajax','Napoli','Bayern Munich','Lyon',)
groupD('Aston Villa','Chealsea','New Castle','Galatasaray',)

function groupA(team1, team2, team3, team4){


 console.log('GROUP A: TABLE')

if(A >= B && A >= C && A >= D){
    console.log (`1. ${team1} - ${A}pts`);

    const firstElement = document.getElementById('first');
    firstElement.innerHTML = `1. ${team1} - ${A}pts`;
 
}else if(B >= A && B >= C && B >= D){
    const firstElement = document.getElementById('first');
    firstElement.innerHTML = `1. ${team2} - ${B}pts`;
    console.log (`1. ${team2} - ${B}pts`);

}else if(C >= B && C >= A && C >= D){
    const firstElement = document.getElementById('first');
    firstElement.innerHTML = `1. ${team3} - ${C}pts`;
    console.log (`1. ${team3} - ${C}pts`);

}else if(D >= B && D >= C && D >= A){
    console.log (`1. ${team4} - ${D}pts`);
    const firstElement = document.getElementById('first');
    firstElement.innerHTML = `1. ${team4} - ${D}pts`;
}




//SECOND PLACE
//SECOND PLACE
if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    const firstElement = document.getElementById('second');
    firstElement.innerHTML = `2. ${team1} - ${A}pts`;
    console.log (`2. ${team1} - ${A}pts`);

}else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    const firstElement = document.getElementById('second');
    firstElement.innerHTML = `2. ${team2} - ${B}pts`;
    console.log (`2. ${team2} - ${B}pts`);

}else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
    const firstElement = document.getElementById('second');
    firstElement.innerHTML = `2. ${team3} - ${C}pts`;
    console.log (`2. ${team3} - ${C}pts`);

}else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
    const firstElement = document.getElementById('second');
    firstElement.innerHTML = `2. ${team4} - ${D}pts`;
    console.log (`2. ${team4} - ${D}pts`);
}




//THIRD PLACE 
//THIRD PLACE

if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
    const firstElement = document.getElementById('third');
    firstElement.innerHTML = `3.${team1} - ${A}pts`;
    console.log (`3. ${team1} - ${A}pts`);

}else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    const firstElement = document.getElementById('third');
    firstElement.innerHTML = `3.${team2} - ${B}pts`;
    console.log (`3. ${team2} - ${B}pts`);

}else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
    const firstElement = document.getElementById('third');
    firstElement.innerHTML = `3.${team3} - ${C}pts`;
    console.log (`3. ${team3} - ${C}pts`);

}else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    const firstElement = document.getElementById('third');
    firstElement.innerHTML = `3.${team3} - ${D}pts`;
    console.log (`3. ${team4} - ${D}pts`);
}


//LAST PLACE

if(A <= B && A <= C && A <= D){
    console.log (`4. ${team1} - ${A}pts`);
    const firstElement = document.getElementById('fourth');
    firstElement.innerHTML = `4. ${team1} - ${A}pts`;

}else if( B <= A && B <= C && B <= D){
    console.log (`4. ${team2} - ${B}pts`);
    const firstElement = document.getElementById('fourth');
    firstElement.innerHTML = `4. ${team1} - ${B}pts`;

}else if( C <= B && C <= A && C <= D){
    console.log (`4. ${team3} - ${C}pts`);
    const firstElement = document.getElementById('fourth');
    firstElement.innerHTML = `4. ${team1} - ${C}pts`;

}else if(D <= B && D <= C && D <= A){
    console.log (`4. ${team4} - ${D}pts`);
    const firstElement = document.getElementById('fourth');
    firstElement.innerHTML = `4. ${team1} - ${D}pts`;
}



}

function groupB(team1, team2, team3, team4){


    console.log('GROUP A: TABLE')
   
   if(A >= B && A >= C && A >= D){
       console.log (`1. ${team1} - ${A}pts`);
   
       const groupbElement = document.getElementById('firstB');
       groupbElement.innerHTML = `1. ${team1} - ${A}pts`;
    
   }else if(B >= A && B >= C && B >= D){
    const groupbElement = document.getElementById('firstB');
    groupbElement.innerHTML = `1. ${team2} - ${B}pts`;
       console.log (`1. ${team2} - ${B}pts`);
   
   }else if(C >= B && C >= A && C >= D){
    const groupbElement = document.getElementById('firstB');
    groupbElement.innerHTML = `1. ${team3} - ${C}pts`;
       console.log (`1. ${team3} - ${C}pts`);
   
   }else if(D >= B && D >= C && D >= A){
       console.log (`1. ${team4} - ${D}pts`);
       const groupbElement = document.getElementById('firstB');
       groupbElement.innerHTML = `1. ${team4} - ${D}pts`;
   }
   
   
   
   
   //SECOND PLACE
   //SECOND PLACE
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    const groupbElement = document.getElementById('secondB');
    groupbElement.innerHTML = `2. ${team1} - ${A}pts`;
       console.log (`2. ${team1} - ${A}pts`);
   
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    const groupbElement = document.getElementById('secondB');
    groupbElement.innerHTML  = `2. ${team2} - ${B}pts`;
       console.log (`2. ${team2} - ${B}pts`);
   
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
    const groupbElement = document.getElementById('secondB');
    groupbElement.innerHTML  = `2. ${team3} - ${C}pts`;
       console.log (`2. ${team3} - ${C}pts`);
   
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
    const groupbElement = document.getElementById('secondB');
    groupbElement.innerHTML  = `2. ${team4} - ${D}pts`;
       console.log (`2. ${team4} - ${D}pts`);
   }
   
   
   
   
   //THIRD PLACE 
   //THIRD PLACE
   
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
    const groupbElement = document.getElementById('thirdB');
    groupbElement.innerHTML  = `3.${team1} - ${A}pts`;
       console.log (`3. ${team1} - ${A}pts`);
   
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    const groupbElement = document.getElementById('thirdB');
    groupbElement.innerHTML  = `3.${team2} - ${B}pts`;
       console.log (`3. ${team2} - ${B}pts`);
   
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
       const groupbElement = document.getElementById('thirdB');
       groupbElement.innerHTML  = `3.${team3} - ${C}pts`;
       console.log (`3. ${team3} - ${C}pts`);
   
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    const groupbElement = document.getElementById('thirdB');
    groupbElement.innerHTML  = `3.${team3} - ${D}pts`;
       console.log (`3. ${team4} - ${D}pts`);
   }
   
   
   //LAST PLACE
   
   if(A <= B && A <= C && A <= D){
       console.log (`4. ${team1} - ${A}pts`);
       const groupbElement = document.getElementById('fourthB');
    groupbElement.innerHTML  = `4. ${team1} - ${A}pts`;
   
   }else if( B <= A && B <= C && B <= D){
       console.log (`4. ${team2} - ${B}pts`);
       const groupbElement = document.getElementById('fourthB');
    groupbElement.innerHTML  = `4. ${team1} - ${B}pts`;
   
   }else if( C <= B && C <= A && C <= D){
       console.log (`4. ${team3} - ${C}pts`);
       const groupbElement = document.getElementById('fourthB');
    groupbElement.innerHTML  = `4. ${team1} - ${C}pts`;
   
   }else if(D <= B && D <= C && D <= A){
       console.log (`4. ${team4} - ${D}pts`);
       const groupbElement = document.getElementById('fourthB');
       groupbElement.innerHTML  = `4. ${team1} - ${D}pts`;
   }
   
   
   
   }


   function groupC(team1, team2, team3, team4){


    console.log('GROUP A: TABLE')
   
   if(A >= B && A >= C && A >= D){
       console.log (`1. ${team1} - ${A}pts`);
   
       const groupcElement = document.getElementById('firstC');
       groupcElement.innerHTML = `1. ${team1} - ${A}pts`;
    
   }else if(B >= A && B >= C && B >= D){
    const groupcElement = document.getElementById('firstC');
       groupcElement.innerHTML = `1. ${team2} - ${B}pts`;
       console.log (`1. ${team2} - ${B}pts`);
   
   }else if(C >= B && C >= A && C >= D){
    const groupcElement = document.getElementById('firstC');
       groupcElement.innerHTML = `1. ${team3} - ${C}pts`;
       console.log (`1. ${team3} - ${C}pts`);
   
   }else if(D >= B && D >= C && D >= A){
       console.log (`1. ${team4} - ${D}pts`);
       const groupcElement = document.getElementById('firstC');
       groupcElement.innerHTML = `1. ${team4} - ${D}pts`;
   }
   
   
   
   
   //SECOND PLACE
   //SECOND PLACE
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    const groupcElement = document.getElementById('secondC');
    groupcElement.innerHTML = `2. ${team1} - ${A}pts`;
       console.log (`2. ${team1} - ${A}pts`);
   
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    const groupcElement = document.getElementById('secondC');
    groupcElement.innerHTML  = `2. ${team2} - ${B}pts`;
       console.log (`2. ${team2} - ${B}pts`);
   
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
    const groupcElement = document.getElementById('secondC');
    groupcElement.innerHTML  = `2. ${team3} - ${C}pts`;
       console.log (`2. ${team3} - ${C}pts`);
   
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
    const groupcElement = document.getElementById('secondC');
    groupcElement.innerHTML  = `2. ${team4} - ${D}pts`;
       console.log (`2. ${team4} - ${D}pts`);
   }
   
   
   
   
   //THIRD PLACE 
   //THIRD PLACE
   
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
    const groupcElement = document.getElementById('thirdC');
    groupcElement.innerHTML  = `3.${team1} - ${A}pts`;
       console.log (`3. ${team1} - ${A}pts`);
   
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    const groupcElement = document.getElementById('thirdC');
    groupcElement.innerHTML  = `3.${team2} - ${B}pts`;
       console.log (`3. ${team2} - ${B}pts`);
   
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
    const groupcElement = document.getElementById('thirdC');
    groupcElement.innerHTML  = `3.${team3} - ${C}pts`;
       console.log (`3. ${team3} - ${C}pts`);
   
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    const groupcElement = document.getElementById('thirdC');
    groupcElement.innerHTML  = `3.${team3} - ${D}pts`;
       console.log (`3. ${team4} - ${D}pts`);
   }
   
   
   //LAST PLACE
   
   if(A <= B && A <= C && A <= D){
       console.log (`4. ${team1} - ${A}pts`);
       const groupcElement = document.getElementById('fourthC');
    groupcElement.innerHTML  = `4. ${team1} - ${A}pts`;
   
   }else if( B <= A && B <= C && B <= D){
       console.log (`4. ${team2} - ${B}pts`);
       const groupcElement = document.getElementById('fourthC');
       groupcElement.innerHTML   = `4. ${team1} - ${B}pts`;
   
   }else if( C <= B && C <= A && C <= D){
       console.log (`4. ${team3} - ${C}pts`);
       const groupcElement = document.getElementById('fourthC');
       groupcElement.innerHTML   = `4. ${team1} - ${C}pts`;
   
   }else if(D <= B && D <= C && D <= A){
       console.log (`4. ${team4} - ${D}pts`);
       const groupcElement = document.getElementById('fourthC');
       groupcElement.innerHTML  = `4. ${team1} - ${D}pts`;
   }
   
   
   
   }

   function groupD(team1, team2, team3, team4){


    console.log('GROUP A: TABLE')
   
   if(A >= B && A >= C && A >= D){
       console.log (`1. ${team1} - ${A}pts`);
   
       const groupdElement = document.getElementById('firstD');
       groupdElement.innerHTML = `1. ${team1} - ${A}pts`;
    
   }else if(B >= A && B >= C && B >= D){
    const groupdElement = document.getElementById('firstD');
    groupdElement.innerHTML = `1. ${team2} - ${B}pts`;
       console.log (`1. ${team2} - ${B}pts`);
   
   }else if(C >= B && C >= A && C >= D){
    const groupdElement = document.getElementById('firstD');
       groupdElement.innerHTML = `1. ${team3} - ${C}pts`;
       console.log (`1. ${team3} - ${C}pts`);
   
   }else if(D >= B && D >= C && D >= A){
       console.log (`1. ${team4} - ${D}pts`);
       const groupdElement = document.getElementById('firstD');
       groupdElement.innerHTML = `1. ${team4} - ${D}pts`;
   }
   
   
   
   
   //SECOND PLACE
   //SECOND PLACE
   if(A>=B && A>=C && A<=D || A>=C && A>=D && A<=B || A>=B && A>=D && A<=C){
    const groupdElement = document.getElementById('secondD');
       groupdElement.innerHTML = `2. ${team1} - ${A}pts`;
       console.log (`2. ${team1} - ${A}pts`);
   
   }else if(B>=A && B>=C && B<=D || B>=C && B>=D && B<=A || B>=A && B>=D && B<=C){
    const groupdElement = document.getElementById('secondD');
    groupdElement.innerHTML = `2. ${team2} - ${B}pts`;
       console.log (`2. ${team2} - ${B}pts`);
   
   }else if(C>=B && C>=A && C<=D || C>=A && C>=D && C<=B || C>=B && C>=D && C<=A){
    const groupdElement = document.getElementById('secondD');
       groupdElement.innerHTML  = `2. ${team3} - ${C}pts`;
       console.log (`2. ${team3} - ${C}pts`);
   
   }else if(D>=B && D>=C && D<=A || D>=C && D>=A && D<=B || D>=B && D>=A && D<=C){
    const groupdElement = document.getElementById('secondD');
       groupdElement.innerHTML  = `2. ${team4} - ${D}pts`;
       console.log (`2. ${team4} - ${D}pts`);
   }
   
   
   
   
   //THIRD PLACE 
   //THIRD PLACE
   
   if(A<=B && A<=C && A>=D || A<=C && A<=D && A>=B || A<=B && A<=D && A>=C){
    const groupdElement = document.getElementById('thirdD');
       groupdElement.innerHTML  = `3.${team1} - ${A}pts`;
       console.log (`3. ${team1} - ${A}pts`);
   
   }else if(B<=A && B<=C && B>=D || B<=C && B<=D && B>=A || B<=A && B<=D && B>=C){
    const groupdElement = document.getElementById('thirdD');
       groupdElement.innerHTML  = `3.${team2} - ${B}pts`;
       console.log (`3. ${team2} - ${B}pts`);
   
   }else if(C<=B && C<=A && C>=D || C<=A && C<=D && C>=B || C<=B && C<=D && C>=A){
    const groupdElement = document.getElementById('thirdD');
       groupdElement.innerHTML  = `3.${team3} - ${C}pts`;
       console.log (`3. ${team3} - ${C}pts`);
   
   }else if(D<=B && D<=C && D>=A || D<=C && D<=A && D>=B || D<=B && D<=A && D>=C){
    const groupdElement = document.getElementById('thirdD');
       groupdElement.innerHTML  = `3.${team3} - ${D}pts`;
       console.log (`3. ${team4} - ${D}pts`);
   }
   
   
   //LAST PLACE
   
   if(A <= B && A <= C && A <= D){
       console.log (`4. ${team1} - ${A}pts`);
       const groupdElement = document.getElementById('fourthD');
       groupdElement.innerHTML  = `4. ${team1} - ${A}pts`;
   
   }else if( B <= A && B <= C && B <= D){
       console.log (`4. ${team2} - ${B}pts`);
       const groupdElement = document.getElementById('fourthD');
       groupdElement.innerHTML    = `4. ${team1} - ${B}pts`;
   
   }else if( C <= B && C <= A && C <= D){
       console.log (`4. ${team3} - ${C}pts`);
       const groupdElement = document.getElementById('fourthD');
       groupdElement.innerHTML   = `4. ${team1} - ${C}pts`;
   
   }else if(D <= B && D <= C && D <= A){
       console.log (`4. ${team4} - ${D}pts`);
       const groupdElement = document.getElementById('fourthD');
       groupdElement.innerHTML   = `4. ${team1} - ${D}pts`;
   }
   
   
   
   }





//1.${team1} has qualified to the next group with ${A} Points
//2.${team1} Has quilified at Second place with ${A} Points
//3.${team1} goes to Europa with ${A} Points
//4.${team1} has been disqualified with ${A} Points