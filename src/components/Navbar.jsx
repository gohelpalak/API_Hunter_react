import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <header>
                <div className="nav bg-slate-800 text-white p-6 flex items-center justify-between">
                    <Link to={"/"} className='text-4xl'>
                        News Geek
                    </Link>
                   
                </div>
            </header>
        </>
    )
}

export default Navbar