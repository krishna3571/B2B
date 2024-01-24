import UserLayout from './Layout';
import '../src/css/catalog.css';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Catalog() {
    const [businessName, setBusinessName] = useState('');
    const [editorData, setEditorData] = useState("");

    const handleReady = (editor) => {
        // Add your custom CSS class to the CKEditor element
        const editorElement = editor.ui.view.editable.element;
        editorElement.classList.add('ckbox');

        // You can store the "editor" and use it when needed.
        console.log('Editor is ready to use!', editor);
    };

    const handleChange = (event, editor) => {
        console.log(event);
        const data = editor.getData();
        setEditorData(data);
    };

    const handleBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        console.log('Focus.', editor);
    };

    useEffect(() => {
        // You can perform any additional logic here when businessName or editorData changes
    }, [businessName, editorData]);

    return (
        <>
            <UserLayout />
            <div className='container layber'>
                {/* <div className="business-name">
                   
                    <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />
                </div> */}

                <div className="App">
                    <CKEditor

                        editor={ClassicEditor}
                        data={editorData}
                        onReady={handleReady}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </div>
            </div>
        </>
    );
}
