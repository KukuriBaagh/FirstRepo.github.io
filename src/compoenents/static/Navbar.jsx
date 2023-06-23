import './Navbar.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function Navbar(){
    return (
        <>
        <nav>
            <ul className='flex flex-row rounded shadow-md h-10 text-xl'>
                <li className='hover:bg-slate-200 m-auto'>Hi There</li>
                <li className='m-auto'>Home</li>
                <li className='m-auto'>Profile</li>
                <li className='m-auto'>Contact</li>
                <li className='m-auto'>Workspace</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar