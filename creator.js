



const creator = (()=>{
    let setupBox = document.getElementById('setupBox')

    const setupBoxTitle = (() =>{
        const p = document.createElement('p')
        p.style.color = 'white'
        p.innerText = 'Form Your League'
        p.style.fontSize = '1.8rem'
        p.style.fontWeight = 'bold'
        p.style.textAlign = 'center'
        return setupBox.append(p)
    })();


function createHorizontalForm() {
  const formDiv = document.createElement('div');
  formDiv.style.display = 'flex'; // Use flexbox to make items horizontally aligned


  const form = document.createElement('form')
  form.style.display = 'flex';


  for (let i = 0; i < arguments.length; i++) {

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = arguments[i];
    input.className = 'form-control'
    input.style.width = '17rem'
    input.style.marginRight = '10px'; 
    input.setAttribute('data-index', i)

    form.appendChild(input);
    formDiv.appendChild(form);
    
    let c  = input.getAttribute('data-index')
    console.log(c)
    console.log()

    var Collector = () => {
        



        let Collector  = []
    let sender = input.value;

    Collector.push(sender)


    }
    
  }
  const readyBtn = document.createElement('button')
  readyBtn.type = 'submit';
  readyBtn.className = 'btn btn-primary'
  readyBtn.style.width = '19rem'
  readyBtn.innerText = 'Ready'
  readyBtn.id = 'readyBtn'

  form.append(readyBtn)

  readyBtn.addEventListener('click', (e)=>{
    e.preventDefault();

  })

 

  return  setupBox.append(formDiv)
  
}

// Usage
const groupA = createHorizontalForm('Team One:', 'Team Two:', 'Team Three:', 'Team Four:');
const groupB = createHorizontalForm('Team One:', 'Team Two:', 'Team Three:', 'Team Four:');
const groupC= createHorizontalForm('Team One:', 'Team Two:', 'Team Three:', 'Team Four:');
const groupD = createHorizontalForm('Team One:', 'Team Two:', 'Team Three:', 'Team Four:');





})();

export default creator



