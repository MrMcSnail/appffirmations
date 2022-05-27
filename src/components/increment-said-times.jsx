  
  const incrementSaidTimes = (setAppffirmationList, affirmation)=>{
    setAppffirmationList((currentList) => {
      return currentList.map(
        (element) => {
          if (element.affirmation === affirmation) {
             return element.said += 1
          } else {

          }
        }
      );
    });
  
  }

  export default incrementSaidTimes