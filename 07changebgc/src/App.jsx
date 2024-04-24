import { useState } from 'react';
import './style.css'
function App() {
  const [bgColor,setBGColor] = useState("#EF946C");
  let myStyle = {
    backgroundColor : bgColor,
    width : "100%",
    height : "100vh",
  }

  const changeBGC = (e)=>{
    setBGColor(e.target.style.backgroundColor);
  }
  return (
    <div className="container" style={myStyle}>
      <div className="btn-box">
        <h2>Click below buttons to change background color</h2>
        <div>
          <button style={{backgroundColor:"red",color:"white"}} onClick={changeBGC}>Red</button>
          <button style={{backgroundColor:"black",color:"white"}} onClick={changeBGC}>Black</button>
          <button style={{backgroundColor:"pink", color:"black"}} onClick={changeBGC}>Pink</button>
          <button style={{backgroundColor:"yellow",color:"black"}} onClick={changeBGC}>Yellow</button>
          <button style={{backgroundColor:"purple",color:"white"}} onClick={changeBGC}>purple</button>
          <button style={{backgroundColor:"blue",color:"white"}} onClick={changeBGC}>Blue</button>
          <button style={{backgroundColor:"green",color:"white"}} onClick={changeBGC}>Green</button>
          <button style={{backgroundColor:"gray",color:"black"}} onClick={changeBGC}>Gray</button>
          <button style={{backgroundColor:"aqua",color:"black"}} onClick={changeBGC}>Aqua</button>
          <button style={{backgroundColor:"white",color:"black"}} onClick={changeBGC}>White</button>
          </div>
        </div>
    </div>
  )
}

export default App
