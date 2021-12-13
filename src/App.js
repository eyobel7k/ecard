import "./App.css";
import GreetingCard from "./Components/GreetingCard";
import { useState } from "react";
import CustomizeMessage from "./Components/customizeMessage";

function App() {
  const [greeting, setGreeting] = useState("Dear Mom,");
  const [body, setBody] = useState("Have a comforting and Joyous holiday");
  const [closing, setClosing] = useState("Love your son, Eyob");
  const [customize, setCustomize]=useState(false)

  return(
    <>
    {customize
     
      ? <CustomizeMessage />
      : <GreetingCard 
      greeting={greeting} 
      body={body} 
      closing={closing} 
      setCustomize={setCustomize}
      />
    
    }
  </>
  )
}

export default App;
