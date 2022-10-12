import { marked } from 'marked';

marked.setOptions({
  breaks: true
 });

const Previewer = ({stuffAsProps}) => {

  console.log('watermelon5');
  console.log(stuffAsProps); 

  // const dummy = marked.parse(JSON.stringify(stuffAsProps));

const dummy = marked.parse(stuffAsProps);

 return (
      <div 
      className='preview_container'> 
      testing 
      <br></br>
      <br></br>

       <div id="preview" className='previewer' dangerouslySetInnerHTML={{ __html: dummy
       }}></div>

      </div>
  );
 }


export default Previewer;


       // eslint-disable-next-line no-lone-blocks
       {/* <div id="preview" className='previewer' dangerouslySetInnerHTML={{ 
         marked(__html: {stuffAsProps}, {renderer: renderer})
       }}> */}

        // eslint-disable-next-line no-lone-blocks
        {/* <div id="preview" className='previewer' 
        dangerouslySetInnerHTML={{  __html: convertIt(stuffAsProps.stuff)
       }}></div> */}