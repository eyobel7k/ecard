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
    console.log(email, greeting, body, closing);
    setPreview(true);
    setCustomize(false);
  };

  return (
    <>
      <div className="instructions">
        <img src={Christmas}  alt="Christmas image "  className="thumb"/>

        <p>
          <strong>How to Reshare:</strong>
          <br />
          Write your own custom message below
        </p>
      </div>

      <form>
        
       
        <div>
        <label htmlFor="Email">Recipient Email </label><br />
          <input
            name="email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Recipient Email"
          />
        </div>
   
        <div>
        <label htmlFor="Greeting">Greeting </label><br />
          <input
            name="greeting"
            type="text"
            value={greeting}
            placeholder="Greeting"
            onChange={(event) => setGreeting(event.target.value)}
          />
        </div>
       
        <div>
        <label htmlFor="body">Body </label><br />
          <textarea
            name="Body"
            type="textarea"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            placeholder="Body"
            rows="3"
          ></textarea>
        </div>
       
        <div>
        <label htmlFor="closing">Closing </label><br />
          <input
            name="closing"
            type="text"
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
    </>
  );
}
