"use client"
import { CldUploadWidget } from 'next-cloudinary'
import React, { useState } from 'react'
import { motion } from "framer-motion";

const gradientColors = {
  default: ['#8750f7', '#0f0715'],
  hover: ['#0f0715', '#8750f7']
};


const Dashboard = () => {

  const [resource, setResource]: any = useState(null);
  const [title, setTitle]: any = useState('');
  const [desc, setDesc]: any = useState('');
  const [liveUrl, setLiveUrl]: any = useState('');
  const [repoUrl, setrepoUrl]: any = useState('');
  const [category, setcategory]: any = useState('');
  const [videoLink, SetVideoLink]: any = useState('');
  console.log(resource, category);

  const objtosend = {
    title,
    desc,
    liveUrl,
    repoUrl,
    resource,
    videoLink,
    category
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!resource ||
      !title ||
      !desc ||
      !repoUrl ||
      !category) {
      alert("Missing Feilds")
      return
    }

    try {
      const res = await fetch('/api/add-project', {
        method: 'POST',
        body: JSON.stringify(objtosend),

      });

      if (res.ok) {
        alert('Message sent successfully!');
        setResource("")
        setTitle("")
        setDesc("")
        setLiveUrl("")
        setrepoUrl("")
        setcategory("")

      } else {
        alert('Error sending message');
      }
    } catch (error) {
      alert('Error sending message');
    }
  };



  return (
    <div className=' flex justify-center items-center mt-20'>

      <div className=' flex flex-col gap-2'>

        <div>

          <label htmlFor="" className='text-white'>Title:</label> <br />
          <input type="text" className='p-2 rounded-md' name="title" id="" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter Project Name' />
        </div>
        <div>

          <label htmlFor="" className='text-white'>Description:</label> <br />
          <input type="text" className='p-2 rounded-md' name="description" onChange={(e) => setDesc(e.target.value)} value={desc} id="" placeholder='Enter Project Description  ' />
        </div>
        <div>

          <label htmlFor="" className='text-white'>Live Link:</label> <br />
          <input type="text" className='p-2 rounded-md' name="repoLink" onChange={(e) => setLiveUrl(e.target.value)} value={liveUrl} id="" placeholder='Enter Project Repo Link  ' />
        </div>
        <div>

          <label htmlFor="" className='text-white'>REpo Link:</label> <br />
          <input type="text" className='p-2 rounded-md' name="liveLink" onChange={(e) => setrepoUrl(e.target.value)} value={repoUrl} id="" placeholder='Enter Project Live Link  ' />
        </div>
        <div>

          <label htmlFor="" className='text-white'>Video Link (Optional):</label> <br />
          <input type="text" className='p-2 rounded-md' name="liveLink" onChange={(e) => SetVideoLink(e.target.value)} value={videoLink} id="" placeholder='Enter Project Live Link  ' />
        </div>
        <div>
          <select name="" id="" onChange={(e) => setcategory(e.target.value)}>
            <option selected>Select</option>
            <option value="App">APP</option>
            <option value="Website">Website</option>
            <option value="Program">Program</option>
          </select>
        </div>


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
                <button className='bg-primary p-2 rounded-md' onClick={handleOnClick}>
                  Upload an Image
                </button>
              );
            }}
          </CldUploadWidget>




        </div>

        <div className='flex justify-center items-center mt-5'>
          <motion.button
            onClick={handleSubmit}
            className="bg-gradient-to-r p-2 px-4 rounded-xl text-white border-primary border"
            initial={{ backgroundImage: `linear-gradient(to right, ${gradientColors.default[0]}, ${gradientColors.default[1]})` }}
            whileHover={{ backgroundImage: `linear-gradient(to right, ${gradientColors.hover[0]}, ${gradientColors.hover[1]})` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            Add Project
          </motion.button>
        </div>





      </div>

    </div>
  )
}

export default Dashboard