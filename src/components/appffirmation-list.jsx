import React from "react";
import deleteAffirmation from "./delete-affirmation.js";
const appffArr = [
  { affirmation: "I am enough", said: 0 },
  { affirmation: "I am confident", said: 0 },
];

function AppffirmationList() {
  const [appffirmationList, setAppffirmationList] = React.useState(appffArr);

  const appffList = appffirmationList.map((affirmationObj, index) => {
    const { affirmation, said } = affirmationObj;

    return (
      <li id={affirmation} key={affirmation}>
        <h2>
          {said} {affirmation}
        </h2>
        <button
          id={affirmation}
          onClick={() => {
            setAppffirmationList((currentList) => {
              return currentList.filter(
                (element) => element.affirmation !== affirmation
              );
            });
          }}
        >
          ⭕
        </button>
      </li>
    );
  });
  return <ul className='affirmations'>{appffList}</ul>;
}
export default AppffirmationList;
