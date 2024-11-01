import axios from 'axios'
import React, { useState } from 'react'

function Form() {
    let [data, setdata] = useState({})
    let [error, seterror] = useState({})
    let setinput = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })
    }
    let validation = () => {
        let err = {}
        if (!data.title) {
            err.title = "Enter Title"
        }
        else if (data.title.length < 4) {
            err.title = "Minimum 3 or more character required"
        }
        if (!data.description) {
            err.description = "Enter Description"
        }
        else if (data.description.length < 4) {
            err.description = "Minimum 3 or more character required"
        }
        if (!data.name) {
            err.name = "Enter Blogger Name"
        }
        else if (data.name.length < 4) {
            err.name = "Must be more than 3 Character"
        }
        if (!data.Category) {
            err.category = "Select Category"
        }
        return err;

    }
    let submit = async (e) => {
        e.preventDefault()
        let validate = validation()
        if (Object.keys(validate).length>0) {
            seterror(validate)
        }
        else{
            seterror({})
            console.log(data);
            let adddata = await axios.post("http://localhost:3000/blog", data)
            console.log(adddata.data);
            setTimeout(() => {
                window.location = '/'
            }, 1000);
        }
        setdata({})
        
    }

    return (
        <>
            <div className="bg-gray-100 mx-auto max-w-6xl  py-20 px-12 lg:px-24 shadow-xl mb-24">
                <form method='post' onSubmit={(e) => { submit(e) }}>
                    <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0 ">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                    Enter Title
                                </label>
                               
                                <div>
                                    <textarea name="title" value={data.title?data.title:""} onChange={(e) => { setinput(e) }} id="" className='border border-gray-200 w-full bg-gray-200 rounded py-3 px-4 mb-3"' placeholder='Title'>
                                    </textarea>
                                    <p className='text-red-600' >{error.title}</p>
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                    Enter Description
                                </label>
                               
                                <div>
                                    <textarea name="description" id=""  value={data.description?data.description:""} onChange={(e) => { setinput(e) }} className='border border-gray-200 w-full bg-gray-200 rounded py-3 px-4 mb-3"' placeholder='Blogger description'>
                                    </textarea>
                                    <p className='text-red-600'>{error.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0 ">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                                    Select Image
                                </label>
                                <div>
                                    <input type="file" />
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="title">
                                    Enter Blogger Name
                                </label>
                                <div>
                                    <input type="text"  value={data.name?data.name:""} className='border border-gray-200 w-full bg-gray-200 rounded py-3 px-3 mb-3' placeholder='enter Blogger Name' name='name' onChange={(e) => { setinput(e) }} />
                                    <p className='text-red-600'>{error.name}</p>
                                </div>
                            </div>
                        </div>

                        <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
                                    Category
                                </label>
                                <div>
                                    <select name='Category'  value={data.Category?data.Category:""} onChange={(e) => { setinput(e) }} className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                        <option >Select category</option>
                                        <option value={"Entertainment"}>Entertainment</option>
                                        <option value={"Technology"}>Technology</option>
                                        <option value={"Sports"}>Sports</option>
                                        <option value={"Business"}>Business</option>
                                        <option value={"Health"}>Health</option>
                                        <option value={"Science"}>Science</option>
                                    </select>
                                    <p className='text-red-600'>{error.category}</p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mt-2">
                            <div className="md:w-full px-3">
                                <button type='submit' className=" bg-gray-900 text-white font-bold py-2 px-2    ">
                                    Add Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form