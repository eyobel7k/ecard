import Christmas from "../images/Christmas.jpg";
import "../App.css";

function GreetingCard({ greeting, body, closing, setCustomize}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Christmas} className="App-logo" alt="Christmas images" />
        <p>{greeting}</p>
        <p>{body}</p>
        <p>{closing}</p>
        <button 
        className="App-link"
        onClick={()=>setCustomize(true)}>Reshare This Card</button>
      </header>
    </div>
  );
}

export default GreetingCard;
