import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  
  const [Jokes,setjokes] = useState([])
  useEffect(()=>{
      axios.get('/api/jo').then((response)=>{
        setjokes(response.data)
      })
      .catch((error)=>{
        console.log(error)
      } 
    )
})

  return (
   <>
   <h2>binod is a good boy</h2>
   <p>Jokes :{Jokes.length}</p>
   {
    Jokes.map((joke,index)=>
      <div key={joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      
      </div>
    )
   }
   </>
  )
}

export default App
