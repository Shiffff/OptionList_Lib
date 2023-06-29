import React, { useState } from 'react'
import OptionList from './lib'

const App = () => {
  const states = [
    "Alabama",
    "Alaska",
  ];


  const inputOptionsChange = (event) => {
    console.log(event.target)
  };
  return (
    <div className="App">
      <OptionList
      data={states}
      name={"Test"}
      onSelect={inputOptionsChange}
      />
    </div>
    )
}

export default App
