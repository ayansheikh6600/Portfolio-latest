"use client"
import { CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'



const page = () => {
    
const [resource, setResource]: any = useState();

console.log(resource,"resource");

    return (
        <div className='text-white'>

            <CldUploadWidget uploadPreset="next_cloudinary_app" onSuccess={(result, { widget }) => {
                setResource(result?.info);  // { public_id, secure_url, etc }
            }}
                onQueuesEnd={(result, { widget }) => {
                    widget.close();
                }}>
                {({ open }) => {
                    function handleOnClick() {
                        setResource(undefined);
                        open();
                    }
                    return (
                        <button onClick={handleOnClick}>
                            Upload an Image
                        </button>
                    );
                }}
            </CldUploadWidget>




        </div>
    )
}

export default page