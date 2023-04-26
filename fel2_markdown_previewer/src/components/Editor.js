import React from 'react'

  console.log('watermelon3');

const Editor = (props) => {

    const handleTextChange = (event) => {
   props.setStuff(event.target.value);
   }

  return (
    <textarea className='editor' id='editor'   
    value={props.stuff} autoFocus name='textarea'
    onChange={handleTextChange}
   
    > </textarea>
  )
}

   

export default Editor