import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function Category(props) {
  // console.log(props.categories);
  

  return (
    <>
      <div className='bg-slate-100'>
        <div className="container mx-auto">
          <div className='flex gap-7 p-5 items-center font-medium ' >
            <button className='font-bold text-xl' onClick={()=>{props.filtereddata("all")}}>Home</button>
            {props.categories.map((val, i) => {
              return (
                <>
                  <div>
                    <div>
                      <button onClick={()=>{props.filtereddata(val)}}>{val}</button>
                    </div>
                  </div>
                </>
              )
            })
            }
             <Link to={"/form"}>
                        <button className='bg-blue-500 px-3 py-2'>Add Blog</button>
                    </Link>
               
          </div>
        </div>
      </div>

    </>
  )
}

export default Category