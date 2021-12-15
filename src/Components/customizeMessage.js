import Christmas from "../images/Christmas.jpg";

export default function CustomizeMessage({
  email,
  setEmail,
  greeting,
  setGreeting,
  body,
  setBody,
  closing,
  setClosing,
  setPreview,
  setCustomize,
}) {
  const onSubmit = (event) => {
    event.preventDefault();
    setPreview(true);
    setCustomize(false);
  };

  return (
    <div className='customize'>
      <div className="instructions">
        <img src={Christmas}  alt="Christmas image "  className="thumb"/>

        <p>
          <strong>How to Reshare:</strong>
        
          Write your own custom message below
        </p>
      </div>

      <form>
        
       
        <div>
        <label htmlFor="email">Recipient Email </label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Recipient Email"
            id="email"
          />
        </div>
   
        <div>
        <label htmlFor="Greeting">Greeting </label>
          <input
            name="greeting"
            type="text"
            value={greeting}
            placeholder="Greeting"
            id="greeting"
            onChange={(event) => setGreeting(event.target.value)}
          />
        </div>
       
        <div>
        <label htmlFor="body">Body </label>
          <textarea
            name="Body"
            type="textarea"
            value={body}
            id="body"
            onChange={(event) => setBody(event.target.value)}
            placeholder="Body"
            rows="3"
          ></textarea>
        </div>
       
        <div>
        <label htmlFor="closing">Closing </label>
          <input
            name="closing"
            type="text"
            id="closing"
            value={closing}
            placeholder="Recipient Email"
            onChange={(event) => setClosing(event.target.value)}
          />

        </div>
        <button
          type="submit"
          onClick={
            onSubmit
          }
        >
          Preview Greeting Card
        </button>
      </form>
    </div>
  );
}
