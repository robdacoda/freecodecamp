import React from 'react'

const Editor = (props) => {

    const handleTextChange = (event) => {
   props.setStuff(event.target.value);
   }

  return (
    <textarea className='editor' id='editorText' name='editorText' placeholder='type here with markdown syntax' autofocus 
    value={props.stuff} 
    onChange={handleTextChange}
    > </textarea>
  )
}

export default Editor