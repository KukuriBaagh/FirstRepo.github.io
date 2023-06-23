import './Navbar.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function Navbar(){
    return (
        <>
        <nav className='mt-2 rounded-sm'>
            <ul className='flex flex-row rounded shadow-md h-10 text-xl'>
                <li className='p-1 rounded-full hover:bg-slate-200 m-auto'><a href="#">Hi There</a></li>
                <li className='p-1 rounded-full hover:bg-slate-200 m-auto'><a href="#home">Home</a></li>
                <li className='p-1 rounded-full hover:bg-slate-200 m-auto'><a href="#profile">Profile</a></li>
                <li className='p-1 rounded-full hover:bg-slate-200 m-auto'><a href="#contact">Contact</a></li>
                <li className='p-1 rounded-full hover:bg-slate-200 m-auto'><a href="#workspace">My Workspace</a></li>
                <li><input className=' mr-0 p-1 rounded-full hover:bg-slate-200 m-auto' type="text" placeholder="Search Here..." /></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar