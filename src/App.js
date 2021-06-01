import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './component/Routes';
import Nav from './component/Nav';

import whiskey from './image/whiskey.jpg';
import duke from './image/duke.jpg';
import perry from './image/perry.jpg';
import tubby from './image/tubby.jpg';

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes dogs={props} />
      </BrowserRouter>
    </div>

  );
}
App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
