
//football group stage


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
    
    if (firstA === groupA[0]){
        return groupA[0]
    }else if(){
        
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


    
function home1(){
    let hom = Math.floor(Math.random() * 5)
    let awy = Math.floor(Math.random() * 5)

    if(hom > awy){

    }
}
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

   


