import React from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const RichTextEditor = ({value, setValue}) => {

    const modules = {

        toolbar: [

            [{ 'header': [1, 2, false] }],

            [{'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],

            ['bold', 'italic', 'underline', 'strike', 'blockquote'],

            [{ 'list': 'ordered' }, { 'list': 'bullet' }],

            ['link'],
        ],

    }

  return (

    <div>
        <ReactQuill theme="snow" modules={modules} value={value} onChange={setValue} className=" h-52 "/>
    </div>

  )
}

export default RichTextEditor