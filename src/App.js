import React from "react";
import AppffirmationList from "./components/appffirmation-list";
import "./App.css";
import Header from "./components/header";



function App() {

  return (
    <>
      <div className='App'>
        <Header />
        <main>
          <AppffirmationList />
        </main>
      
      </div>
    </>
  );
}

export default App;
