import { DOMCreator } from "./dom.js";


let TeamsArr = loadLibraryFromStorage();

class GroupStage {
    constructor(team1, team2, team3, team4) {
        this.team = [team1, team2, team3, team4]
        this.points = [this.point(), this.point(), this.point(), this.point()];
    }
    point() {
        return Math.floor(Math.random() * 10) + 1;
    }
    teamPoint(){
       for(let i=0; i<this.team; i++){
       return [this.team[i], this.points[i]]
       }
    }
}

// Add a new book to the library array and save to localStorage
function addNewTeam(team1, team2, team3, team) {
    const newTeam = new GroupStage(team1, team2, team3, team);
    console.log(newTeam.teamPoint())
    TeamsArr.push(newTeam);
   

 
}
saveLibraryToStorage()

// Save library to localStorage
function saveLibraryToStorage() {
    localStorage.setItem('TeamsArr', JSON.stringify(TeamsArr));
}

// Load library from localStorage
function loadLibraryFromStorage() {
    const team = localStorage.getItem('TeamsArr');
    if(team){
       return JSON.parse(team)
    } else{
        return []
    } 
}

// Display all books in the library
export function displayer(arr) {
    for (let i = 0; i < arr.length; i++) {
        DOMCreator(arr[i].team[0], arr[i].team[1], arr[i].team[2], arr[i].team[3], i);
        
        
        const dom = DOMCreator().insert(arr[i].points[0], arr[i].points[1], arr[i].points[2], arr[i].points[3], i)
        console.log(arr[i].points)
    }
    console.log(TeamsArr)
   
}




addNewTeam('Liverpool', 'Barcelona', 'Arsenal', 'Man City')
addNewTeam('Psg', 'Sevilla', 'Man Utd', 'Fulham')
addNewTeam('Ajax','Napoli','Bayern Munich','Lyon')
addNewTeam('Aston Villa','Chealsea','New Castle','Galatasaray')

// Display the initial set of books
displayer(TeamsArr);




