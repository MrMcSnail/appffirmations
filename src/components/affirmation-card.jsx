import deleteAffirmation from "./delete-affirmation"
import incrementSaidTimes from "./increment-said-times";

const AffirmationCard = ({affirmation, said, setAppffirmationList}) => {
return(
<li onClick={()=>{incrementSaidTimes(setAppffirmationList, affirmation)}} id={affirmation} key={affirmation}>
<h2>
  {affirmation}<p>said: {said} </p>
</h2>
<button
  id={affirmation}
  onClick={() => {deleteAffirmation(setAppffirmationList, affirmation)
  }}
>
  ⭕
</button>
</li>)}

export  default AffirmationCard