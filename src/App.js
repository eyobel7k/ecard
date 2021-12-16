import "./App.css";
import GreetingCard from "./Components/GreetingCard";
import CustomizeMessage from "./Components/customizeMessage";
import { useState } from "react";

function App() {
  const query = new URLSearchParams(window.location.search);

  const[email, setEmail]=useState('elegese@alphaworks.tech');
  const [importedGreeting, setImportedGreeting] = useState(query.get('greeting') ||"Dear Mom,");
  const [importedBody, setImportedBody] = useState(query.get('body') ||"Have a comforting and Joyous holiday");
  const [importedClosing, setImportedClosing] = useState(query.get('closing') ||"Love your son, Eyob");
  const [customize, setCustomize]=useState(false)
  const [preview, setPreview]=useState(false)

  

  return(
    <>
    {customize
     
      ? <CustomizeMessage 
      email={email}
      setEmail={setEmail}
      greeting={importedGreeting}
      setGreeting={setImportedGreeting}
      body={importedBody}
      setBody={setImportedBody}
      closing={importedClosing}
      setClosing={setImportedClosing}
      setPreview={setPreview}
      setCustomize={setCustomize}
      
      
      />
      : <GreetingCard 
      email={email}
      greeting={importedGreeting} 
      body={importedBody} 
      closing={importedClosing} 
      setCustomize={setCustomize}
      preview={preview}
      setPreview={setPreview}

      />
    
    }
  </>
  )
}

export default App;
