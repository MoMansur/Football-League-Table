import { displayer } from "./main.js";


function factoryDom(type, id, className) {
    const element = document.createElement(type)
    element.id = id
    element.className = className

    return element
  }

export function DOMCreator(team1, team2, team3, team4, index){
    const groupCard = document.createElement('div')
    groupCard.id = 'groupCard'
    groupStageContainer.append(groupCard)
      
    const teamsList = factoryDom('div', 'teamUl', 'teamUl')
    groupCard.append(teamsList)

    let letters = ['A', 'B', 'C', 'D', 'E', 'F']
    const groupTitle = factoryDom('h5', 'groupTitle')
    groupTitle.style.textAlign = 'center'
    groupTitle.innerText = `Group ${letters[index]}`
  
    //THE DIV
    const firstPlaceDiv = factoryDom('div', 'team1', 'team')
    const secondPlaceDiv = factoryDom('div', 'team2', 'team')
    const thirdPlaceDiv = factoryDom('div', 'team3', 'team')
    const fourthPlaceDiv = factoryDom('div', 'team4', 'team')
  
    //Number Span
    const numberOne = factoryDom('span', 'one', 'numberSpan')
    numberOne.innerText = '1'
    const numberTwo = factoryDom('span', 'two', 'numberSpan')
    numberTwo.innerText = '2'
    const numberThree = factoryDom('span', 'three', 'numberSpan')
    numberThree.innerText = '3'
    const numberFour = factoryDom('span', 'four', 'numberSpan')
    numberFour.innerText = '4'
    
    //////  THE TEAM NAME SPAN   //////
    const firstPlaceTeam = factoryDom('span', 'firstTeam', 'team')
    const secondPlaceTeam = factoryDom('span', 'secondTeam', 'team')
    const thirdPlaceTeam = factoryDom('span', 'thirdTeam', 'team')
    const fourthPlaceTeam = factoryDom('span', 'fourthTeam', 'team')

    //Points
    const firstPlaceDivPoints = factoryDom('span', 'firstPlaceDivPoints', 'pts')
    const secondPlaceDivPoints = factoryDom('span', 'firstPlaceDivPoints', 'pts')
    const thirdPlaceDivPoints = factoryDom('span', 'firstPlaceDivPoints', 'pts')
    const fourthPlaceDivPoints = factoryDom('span', 'firstPlaceDivPoints', 'pts')

    //Shuffle    
    const playBtn = factoryDom('button', 'playBtn', 'btn btn-primary')
    const playIcon = factoryDom('i', 'playIcon',"fa-solid fa-play")  
    playBtn.append(playIcon)
    const tableFunctionDiv = factoryDom('div', 'tableFunctionDiv')
    tableFunctionDiv.append(playBtn)
      
                        //APPENDER\\   
    //TeamList
    teamsList.append(groupTitle)
    teamsList.append(firstPlaceDiv)
    teamsList.append(secondPlaceDiv)
    teamsList.append(thirdPlaceDiv)
    teamsList.append(fourthPlaceDiv)

    //Number Append
    firstPlaceDiv.append(numberOne)
    secondPlaceDiv.append(numberTwo)
    thirdPlaceDiv.append(numberThree)
    fourthPlaceDiv.append(numberFour)

    //The Team Name Span Append
    firstPlaceDiv.append(firstPlaceTeam)
    secondPlaceDiv.append(secondPlaceTeam)
    thirdPlaceDiv.append(thirdPlaceTeam)
    fourthPlaceDiv.append(fourthPlaceTeam)

    //POints
    firstPlaceDiv.append(firstPlaceDivPoints)
    secondPlaceDiv.append(secondPlaceDivPoints)
    thirdPlaceDiv.append(thirdPlaceDivPoints)
    fourthPlaceDiv.append(fourthPlaceDivPoints)
  
    //
    teamsList.append(tableFunctionDiv)
      
         
   function insert(){
    firstPlaceTeam.innerText = team1
    secondPlaceTeam.innerText = team2
    thirdPlaceTeam.innerText = team3
    fourthPlaceTeam.innerText = team4
   }
   insert()



   

  //EVENT LISTENERS
  playBtn.addEventListener('click', ()=>{

  })
  
   
  

  }
  

