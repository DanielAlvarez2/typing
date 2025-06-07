import { useState } from 'react'


const targets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

const wrong = new Audio('wrong.mp3')
const correct = new Audio('correct.mp3')

function App() {

  function checkAnswer(){
    if(document.querySelector('#right').value == document.querySelector('#left').textContent) {
      document.querySelector('#right').style.backgroundColor = 'green' 
      correct.play()
      reset()
    }else{
      document.querySelector('#right').style.backgroundColor = 'red'
      wrong.play() 
      reset()
    }
  }
  

  function reset(){
    setTimeout(()=>{
      document.querySelector('#right').value = ''
      document.querySelector('#right').style.backgroundColor = 'blue'
      let newTarget
      do{
        newTarget = targets[Math.floor(Math.random()*targets.length)]
      }while(newTarget == document.querySelector('#left').value)
      setTarget(newTarget)
    },1200)
  }
  
  const [target, setTarget] = useState(targets[Math.floor(Math.random()*targets.length)])

  return (
    <main>
     <h1 id='left'>{target}</h1>
     <input autoFocus id='right' maxlength='1' onKeyUp={checkAnswer} />
    </main>
  )
}

export default App
