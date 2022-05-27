  
  const deleteAffirmation = (setAppffirmationList, affirmation)=>{
    setAppffirmationList((currentList) => {
      return currentList.filter(
        (element) => element.affirmation !== affirmation
      );
    });
  
  }

  export default deleteAffirmation