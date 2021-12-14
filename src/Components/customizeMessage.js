import Christmas from "../images/Christmas.jpg";

export default function CustomizeMessage(){
  return(
    <div className="instructions">
    <img src={Christmas} className="thumb" alt="Christmas images" />
    
    <p><strong>How to Reshare:</strong><br />Write your own custom message below</p>
    </div>
  )
}