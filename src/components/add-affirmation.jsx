function addAffirmation({appffirmationList, newAff}) {
    
  setAppffirmationList((currAffimationList) => {
      return [...currAffimationList, newAff];
    });
  };

  export default addAffirmation