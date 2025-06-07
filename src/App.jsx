import { useState } from 'react'

function Left(){
  return 
}

function Right(){
  return <input id='right' />
}

const targets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function App() {
  const [target, setTarget] = useState(targets[Math.floor(Math.random()*targets.length)])

  return (
    <main>
     <h1 id='left'>{target}</h1>
     <Right />
    </main>
  )
}

export default App
