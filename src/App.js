import "./App.css";
import GreetingCard from "./Components/GreetingCard";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Dear Mom");
  const [body, setBody] = useState("Have a comforting and Joyous holida");
  const [closing, setClosing] = useState("Love your son Eyob");

  return <GreetingCard 
          greeting={greeting} 
          body={body} 
          closing={closing} 
          />;
}

export default App;
