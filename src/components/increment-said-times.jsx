  
  const incrementSaidTimes = (setAppffirmationList, affirmation)=>{
    setAppffirmationList((currentList) => {
      return currentList.map(
        (element) => {
          if (element.affirmation === affirmation) {
             return {affirmation: element.affirmation, said: element.said ++
          }} else {
return element
          }}
        
      );
    });
  
  }

  export default incrementSaidTimes