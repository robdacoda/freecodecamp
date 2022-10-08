import { useState } from 'react';

import Header from './components/Header.js';
import Editor from './components/Editor.js';
import Previewer from './components/Previewer.js';



function App() {
  const [stuff, setStuff] = useState('Type some markdown in the top box, and see it rendered down below.');


  return (
    <div className="App">
      <Header></Header>
      <Editor stuff={stuff} setStuff={setStuff}></Editor>
      <Previewer content={stuff} ></Previewer>
    </div>
  );
}

export default App;
// 