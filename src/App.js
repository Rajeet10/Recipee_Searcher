import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipees from "./components/Recipees";

function App() {
  const [search, setSearch] = useState("");
  const [recipees, setRecipees] = useState([]);

  const APP_ID = "50c8d48b";
  const APP_KEY = "d6c6c6ad0dbade5117b9efc9d6fd7419";
const fetch=async()=>{
  const result=await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  console.log(result);
  setRecipees(result.data.hits);
}
useEffect(()=>{
  fetch();
// eslint-disable-next-line
},[search])
  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearchClick=()=>{
    fetch();
  }
  return (
    <div className="App">
      <Header 
      search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick} />
      <div className="container">
      <Recipees recipees={recipees}/>
      </div>
    
    </div>
  );
}

export default App;
