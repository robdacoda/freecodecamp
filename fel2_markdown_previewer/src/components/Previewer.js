import { marked } from 'marked';

marked.setOptions({
  breaks: true});

const renderer = new marked.Renderer();

const Previewer = (content) => {

  return (
      <div className='preview_container'> testing 
       <div 
       className='previewer' 
       dangerouslySetInnerHTML={{
            __html: 'hello world' 
         }}
        //  dangerouslySetInnerHTML={{
        //     __html: marked(content, {renderer: renderer})
        //  }} 
       id="preview" 
      ></div>
      </div>
  );
}

Previewer.defaultProps = {
   stuff: 'This is default text'
}
export default Previewer;