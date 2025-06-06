import { useState } from 'react'

function Left(){
  return <h1 id='left'>a</h1>
}

function Right(){
  return <input id='right' />
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <Left />
     <Right />
    </main>
  )
}

export default App
