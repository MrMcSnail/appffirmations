import React from "react"
import deleteAffirmation from './delete-affirmation.js'
const appffArr = [
 
  { affirmation: "I am enough", said: 0 },
  { affirmation: "I am confident", said: 0 },
];

function AppffirmationList () {
  const [appffirmationList, setAppffirmationList] = React.useState(appffArr)
  
  const appffList = appffirmationList.map((affirmationObj)=>{
    const {affirmation, said} =affirmationObj
   
    return (
    <li key = {affirmation}>
      <h2>{said} {affirmation}</h2>
      <button id = {affirmation} onClick = {()=>{deleteAffirmation(appffirmationList,affirmation)}}>⭕</button>
      </li>);
});
  return <ul className= 'affirmations'>
    {appffList}
     </ul>
      }   
export default AppffirmationList