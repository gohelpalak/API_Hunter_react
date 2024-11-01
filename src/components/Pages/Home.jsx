import React, { useEffect, useState } from 'react'
import Category from '../Category'
import axios from 'axios'
import Blog from '../Blog'

function Home() {
  const [data, setdata] = useState(["Entertainment", "Technology", "Sports", "Business", "Health", "Science"])
  let [blog, setblog] = useState([])


  useEffect(() => {
    blogdata()
  }, [])

  let blogdata = () => {
    let blogdata = axios.get("http://localhost:3000/blog")
    blogdata.then((res) => {
      // console.log(res.data);
      setblog(res.data)
    })
  }

  let filterdata = async (val) => {
    console.log(val);
    if (val == "all") {
      blogdata()
    }
    else {
      let getdata = await axios.get("http://localhost:3000/blog?Category=" + val)
      console.log(getdata.data);
      setblog(getdata.data)
    }
  }

  return (
    <>
      <Category categories={data} filtereddata={filterdata} />
      <Blog blogdata={blog} />
    </>
  )
}

export default Home