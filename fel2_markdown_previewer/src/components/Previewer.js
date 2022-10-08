import { marked } from 'marked';

marked.setOptions({
  breaks: true});

const renderer = new marked.Renderer();

const Previewer = (markdown) => {

  return (
      <div className='preview_container'>
       <div className='previewer'            dangerouslySetInnerHTML={{
            _html: marked(markdown, {renderer: marked}),
         }} 
       id="preview"
       ></div>
      </div>
  );
}

Previewer.defaultProps = {
   stuff: 'This is default text'
}
export default Previewer;