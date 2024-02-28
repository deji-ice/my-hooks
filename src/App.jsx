import { useState } from "react"
import Input from "./components/Input"
import Navbar from "./components/Navbar"

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return ( 
      <div className={`${darkMode && 'dark'}`} >
       <Navbar setDarkMode={setDarkMode} darkMode={darkMode}/>
       <Input/>
      </div>
      
  )
}

export default App
