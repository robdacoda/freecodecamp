import { useState } from 'react';

import Header from './components/Header.js';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';



function App() {

  const [stuff, setStuff] = useState('');

  const fileURL = './sample.txt';
  fetch(fileURL)
  .then( response => response.text() )
  .then( sampleText => {
    setStuff(sampleText)
    }
  );

  console.log('watermelon1');

  return (
    <div className="App">
      <Header></Header>

      <Editor stuff={stuff} setStuff={setStuff}></Editor>  

      <Previewer stuffAsProps={stuff} ></Previewer>
    </div>
  );
}

export default App;
