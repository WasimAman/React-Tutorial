import { useCallback, useEffect, useState } from "react"

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed){
      str += "!@#$%^&*_-+=?/\\|~`:;.";
    }
    
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length);
      pass += str.charAt(index);
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-xl">
      <h1 className="text-white text-4xl text-center my-3">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range" 
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              id="wasim"
              onChange={(e)=>{
                setLength(e.target.value)
              }}
              />
              <label className="text-xl">Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"
                defaultValue={numberAllowed}
                onChange={()=>{
                  setNumberAllowed((prev)=> !prev)
                }}

              />
          </div>
          <label className="text-xl">Numbers</label>
          <div className="flex items-center gap-x-1">
              <input 
                type="checkbox"
                defaultValue={charAllowed}
                onChange={()=>{
                  setCharAllowed((prev)=> !prev)
                }}
              />
          </div>
          <label className="text-xl">Characters</label>
        </div>
      </div>
    </>
  )
}
// const wasim =  document.querySelector("#wasim");
// console.log(wasim);

export default App
