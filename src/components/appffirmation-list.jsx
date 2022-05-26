import React from "react"

function AppffirmationList ({appffArr}) {
  

  const appffList = appffArr.map((affirmation)=>{
    return (<li key={affirmation.affirmation}>
      <h2>{affirmation.said} {affirmation.affirmation}</h2>
      </li>);
});
  return <ul className= 'affirmations'>
    {appffList}
     </ul>
      }   
export default AppffirmationList