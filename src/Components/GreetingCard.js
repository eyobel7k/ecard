import Christmas from "../images/Christmas.jpg";
import "../App.css";


function GreetingCard({
  greeting,
  body,
  closing,
  setCustomize,
  preview,
  setPreview,
  email,
}) {
  const continueEditing = () => {
    setCustomize(true);
    setPreview(false);
  };
  const sendEcard = () => {
    {
      let mailto = `mailto:${email}`;
      mailto += "?subject=E-Card";
      mailto += "&body=You have received an e-greeting card.";
      mailto += "%0D%0A%0D%0A";
      mailto += "Go To Greeting Card";
      mailto += "%0D%0A";

      let url = "https://eyobel7k.github.io/ecard";
      url += `?greeting=${encodeURIComponent(greeting)}`;
      url += `&body=${encodeURIComponent(body)}`;
      url += `&closing=${encodeURIComponent(closing)}`;

      mailto += encodeURIComponent(url);

      console.log(mailto);

      window.open(mailto);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={Christmas} className="App-logo" alt="Christmas images" />
        <p className="script">{greeting}</p>
        <p className="script">{body}</p>
        <p className='script'>{closing}</p>
        {preview ? (
          <div className='buttons'>
            <button  className='btn'onClick={continueEditing}><span>ContinueEditing</span></button>
            <button className='btn' onClick={sendEcard}><span>Send</span></button>
          </div>
        ) : (
          <button className='btn'  onClick={() => setCustomize(true)}>
         <span>Reshare This Card</span> 
        </button>
          
        )}
      </header>
    </div>
  );
}

export default GreetingCard;
