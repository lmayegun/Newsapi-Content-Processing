import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

import {PageLayout} from 'app/components';

const SaveContent = ({location, placeholder, modules, formats})=>{

  const article = location.article;
  const [theme, setTheme] = useState();
  const [editorHtml, setEditorHtml] = useState("Smaple Text");

  useEffect(()=>{
    if(article == undefined){
      return
    }
    setEditorHtml(article.description);
  },[article]);

  function handleChange (content, delta, html, editor) {
    setEditorHtml(content);
  }

  if(!article){
    return <h1> No Article to work on </h1>
  }
  return(
    <PageLayout
      header={<h1> Save Content </h1>}
      content={
        <div>
          <ReactQuill
            theme={'snow'}
            onChange={handleChange}
            value={editorHtml}
            modules={{
              toolbar: [
                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                 {'indent': '-1'}, {'indent': '+1'}],
                ['link', 'image', 'video'],
                ['clean']
              ],
              clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
              }
            }}
            formats={[
              'header', 'font', 'size',
              'bold', 'italic', 'underline', 'strike', 'blockquote',
              'list', 'bullet', 'indent',
              'link', 'image', 'video'
            ]}
            bounds={'.app'}
            placeholder={'placeholder'}
           />
           <div dangerouslySetInnerHTML={{__html:editorHtml}}/>
        </div>
      }
    />
  )
};
export default withRouter(SaveContent);
