import { useState } from 'react'


const targets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function checkAnswer(){
  if(document.querySelector('#right').value == document.querySelector('#left').textContent) {
    document.querySelector('#right').style.backgroundColor = 'green' 
  }else{
    document.querySelector('#right').style.backgroundColor = 'red' 
  }
}

function App() {
  const [target, setTarget] = useState(targets[Math.floor(Math.random()*targets.length)])

  return (
    <main>
     <h1 id='left'>{target}</h1>
     <input autoFocus id='right' onKeyUp={checkAnswer} />
    </main>
  )
}

export default App
