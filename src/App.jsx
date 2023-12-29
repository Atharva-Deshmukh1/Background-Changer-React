import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='main' style={{backgroundColor:color}}>
        <div className='bottom-bar'> 
          <button style={{backgroundColor:"red"}} onClick={()=>{setColor("red")}}>RED</button>
          <button  style={{backgroundColor:"green"}} onClick={()=>{setColor("green")}}>GREEN</button>
          <button  style={{backgroundColor:"blue"}} onClick={()=>{setColor("blue")}}>BLUE</button>
          <button  style={{backgroundColor:"white"}} onClick={()=>{setColor("white")}}>WHITE</button>
          <button  style={{backgroundColor:"yellow"}} onClick={()=>{setColor("yellow")}}>YELLOW</button>
        </div>
        
      </div>


    </>
  )
}

export default App
