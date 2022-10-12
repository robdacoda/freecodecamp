import React from 'react'

const Editor = (props) => {

    const handleTextChange = (event) => {
   props.setStuff(event.target.value);
   }

  return (
    <textarea className='editor' id='editor'   
    value={props.stuff} autofocus name='textarea'
    onChange={handleTextChange}
   
    > </textarea>
  )
}

 const sampleText = <link rel="sample.txt"/> ;

Editor.defaultProps = {
   content: sampleText
};
   

export default Editor