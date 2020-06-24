import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = (props)=>{

  const {handleEditorChange, value, label, } = props;

  return(
    <>
      <h3> {label} </h3>
      <ReactQuill
        theme={'snow'}
        onChange={handleEditorChange}
        value={value}
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
        style={{height:'auto'}}
       />
    </>
  )
}

export default TextEditor;
