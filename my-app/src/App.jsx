import Navbar from "./components/Navbar"
import TextFrom from "./components/TextFrom"

function App() {
  return (
    <>
      <Navbar title="TextUtils" about = "AboutUs"/> 
      {/* this is like function call and i can pass any no of parameter here */}
      <TextFrom heading="Enter text to analyze below"/>
    </>
  )
}

export default App
