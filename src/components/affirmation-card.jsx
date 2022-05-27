import deleteAffirmation from "./delete-affirmation"


const AffirmationCard = ({affirmation, said, setAppffirmationList}) => {
return(
<li id={affirmation} key={affirmation}>
<h2>
  {said} {affirmation}
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