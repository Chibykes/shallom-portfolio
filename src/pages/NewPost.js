import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Header from '../components/Header';

import {FilePond, registerPlugin} from 'react-filepond';
import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';


// Register the plugins
registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileEncode
);



export default function NewPost() {
    const [portfolio, setPortfolio] = useState({});
    const [post, setPost] = useState({
        image: '',
        title: '',
        subtitle: '',
        summary: '',
        story: ''
    });

    const editorRef = useRef(null);
    
    const publish = () => {

        handlePost('story', null, editorRef.current.getContent());

        fetch('https://api.jsonstorage.net/v1/json/be8c8540-c99e-4d11-abf6-a9e8d066cf60/c13b593d-c253-4bee-b480-e0def98c691b?apiKey=a0f5ad7b-42de-4302-b126-5635583165ea', {
            method: 'put',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...portfolio, posts: [...portfolio.posts, {...post, story: editorRef.current.getContent() }]})
        })
        .then(res => res.json())
        .then(data => {
            console.log(post)
            console.log(portfolio)
            console.log(data)
        });
    };
    
    const handlePost = (target, e, details) => {
        setPost({ ...post, [target]: details || e.target.value  });
    }

    useEffect(() => {
        
        fetch('https://api.jsonstorage.net/v1/json/be8c8540-c99e-4d11-abf6-a9e8d066cf60/c13b593d-c253-4bee-b480-e0def98c691b?apiKey=a0f5ad7b-42de-4302-b126-5635583165ea', {
            method: 'get',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            setPortfolio(data);
        });

        return;

    // eslint-disable-next-line
    }, []);


    return (
        <main className="">
            <section className="relative lg:p-40">
                <Header />

                <div className="flex justify-end items-center py-5 gap-10">
                    {/* <div className="inline py-1 px-5 font-[Montserrat] rounded-full bg-orange-800 text-white font-bold text-xs cursor-pointer active:ring-orange-600 ring-offset-2 ring-transparent ring-2" onClick={() => console.log(post)}>Check</div> */}
                    <div className="inline py-1 px-5 font-[Montserrat] rounded-full bg-green-800 text-white font-bold text-xs cursor-pointer active:ring-green-600 ring-offset-2 ring-transparent ring-2" onClick={publish}>Publish</div>
                </div>


                <FilePond
                    allowMultiple={false}
                    onupdatefiles={(file) => handlePost('image', null, file[0].getFileEncodeDataURL())}
                />

                <div className="">
                    <input 
                        className="block w-full border-none px-6 py-5 text-3xl font-bold font-[Montserrat] focus:outline-none" 
                        placeholder="Title" 
                        type="text"
                        onChange={(e) => handlePost('title', e)}
                    />
                </div>

                <div className="">
                    <input 
                        className="block w-full border-none px-6 py-5 text-xl font-semibold font-[Montserrat] focus:outline-none" 
                        placeholder="Subtitle" 
                        type="text" 
                        onChange={(e) => handlePost('subtitle', e)}
                    />
                </div>

                <div className="">
                    <input 
                        className="block w-full border-none px-6 py-5 text-lg font-semibold font-[Montserrat] focus:outline-none" 
                        placeholder="Summary" 
                        type="text" 
                        onChange={(e) => handlePost('summary', e)}
                    />
                </div>

                {/* <div className="">
                    <input className="block w-full border-none px-6 py-5 text-md text-main-yellow font-bold font-[Montserrat] focus:outline-none" placeholder="Permalink" type="text" />
                </div> */}

                <hr className="border-zinc-200 w-11/12 mx-auto mb-5"/>

                <Editor
                    apiKey='your-api-key'
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue="<p>Write new post...</p>"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'autosave', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'restoredraft undo redo | blocks | ' +
                            'bold italic forecolor | fontsize lineheight | image | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Lato,Helvetica,Arial,sans-serif; font-size:16px }',
                        //   content_css: 'writer',
                        image_title: true,
                        /* enable automatic uploads of images represented by blob or data URIs*/
                        automatic_uploads: true,
                        autosave_interval: '5s',
                        /*
                            URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
                            images_upload_url: 'postAcceptor.php',
                            here we add custom filepicker only to Image dialog
                        */
                        file_picker_types: 'image',
                        /* and here's our custom image picker*/
                        file_picker_callback: (cb, value, meta) => {
                            const input = document.createElement('input');
                            input.setAttribute('type', 'file');
                            input.setAttribute('accept', 'image/*');

                            input.addEventListener('change', (e) => {
                            const file = e.target.files[0];

                            const reader = new FileReader();
                            reader.addEventListener('load', () => {
                                /*
                                Note: Now we need to register the blob in TinyMCEs image blob
                                registry. In the next release this part hopefully won't be
                                necessary, as we are looking to handle it internally.
                                */
                                const id = 'blobid' + (new Date()).getTime();
                                const blobCache =  editorRef.current.editorUpload.blobCache;
                                const base64 = reader.result.split(',')[1];
                                const blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);

                                /* call the callback and populate the Title field with the file name */
                                cb(blobInfo.blobUri(), { title: file.name });
                            });
                            reader.readAsDataURL(file);
                            });

                            input.click();
                        },
                    }}
                />
            </section>
        </main>
    );
}