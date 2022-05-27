import deleteAffirmation from "./delete-affirmation"
import incrementSaidTimes from "./increment-said-times";

const AffirmationCard = ({affirmation, said, setAppffirmationList}) => {
return(
<li className = "affirmation-card" onClick={()=>{incrementSaidTimes(setAppffirmationList, affirmation)}} id={affirmation} key={affirmation}>
<h2 classname = "inner-affirmation">
  {affirmation} </h2> 
  <h2 className ="inner-affirmation"> said: {said} </h2>
  
  <button className="inner-affirmation"
  id={affirmation}
  onClick={() => {deleteAffirmation(setAppffirmationList, affirmation)
  }}
>
  ⭕
</button>
</li>)}

export  default AffirmationCard