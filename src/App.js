import React from "react";
import AppffirmationList from "./components/appffirmation-list";
import "./App.css";
import Header from "./components/header";

const appffArr = [
  { affirmation: "I am enough", said: 0 },
  { affirmation: "I am confident", said: 0 },
];

function App() {
const newAff = {affirmation: 'Life is grand', said: 0}
const [appffirmationList, setAppffirmationList] = React.useState(appffArr)



  return (
    <>
      <div className='App'>
        <Header />
        <main>
          <AppffirmationList appffArr={appffirmationList} />
        </main>
        <
      </div>
    </>
  );
}

export default App;
