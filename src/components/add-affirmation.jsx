import { useState } from "react";

const AddAffirmation = ({ setAffirmationList }) => {
  const [newAffirmation, setNewAffirmation] = useState("");

  const handleSubmit = (event) => {
    // prevent the forms default behaviour
    event.preventDefault();
    // add the newItem to our list in App
    const newAffirmationCard = { affirmation: newAffirmation, said: 0 };

    setAffirmationList((currList) => {
      return [newAffirmationCard, ...currList];
    });
    // reset the input to be empty
    setNewAffirmation('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Add a new affirmation:  </label>
        <br/>
        <input
          type='text'
          name='affirmation'
          value={newAffirmation}
          onChange={(event) => setNewAffirmation(event.target.value)}
        />
    <br/>
      <button type='submit'>Commit</button>
    </form>
  );
};

export default AddAffirmation
