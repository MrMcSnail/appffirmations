import React from "react";
import AffirmationCard from "./affirmation-card.jsx"

const appffArr = [
  { affirmation: "I am enough", said: 0 },
  { affirmation: "I am confident", said: 0 },
];

function AppffirmationList() {
  const [appffirmationList, setAppffirmationList] = React.useState(appffArr);

  const appffList = appffirmationList.map((affirmationObj) => {
    const { affirmation, said } = affirmationObj;

    return (
     <AffirmationCard affirmation = {affirmation} said ={said} setAppffirmationList = {setAppffirmationList} />
    );
  });
  return <ul className='affirmations'>{appffList}</ul>;
}
export default AppffirmationList;
