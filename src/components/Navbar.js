import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import cvLogo from '../images/cvlogo.png'

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        
        <div className="ml-5 mr-5 relative pt-10">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                {/* <!--
                    Mobile menu, show/hide based on menu open state.
                --> */}
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div>
                            <img className="h-10 w-15" src={cvLogo} alt="logo"/>
                        </div>
                    </div>
                </div>

                <div id="mobile-menu" className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu hidden md:block md:ml-10 md:pr-4"}>  
                    <Link to="/" className="px-2 font-thin text-1xl text-gray-500 hover:text-green-400 transition relative pt-4 lg:text-3xl md:text-2xl sm:text-1xl">About</Link>
                    
                    <Link to="/projects" className="font-thin text-1xl text-gray-500 hover:text-green-400 transition relative pt-4 px-2 lg:text-3xl md:text-2xl sm:text-1xl">Projects</Link>
                      
                    <Link to="/resume" className="font-thin text-1xl text-gray-500 hover:text-green-400 transition relative pt-4 px-2 lg:text-3xl md:text-2xl sm:text-1xl">Resume</Link>
                       
                    <Link to="/contact" className="font-thin text-1xl text-gray-500 hover:text-green-400 transition relative pt-4 px-2 lg:text-3xl md:text-2xl sm:text-1xl">Contact</Link>
                </div>

                <div id="mobile_burger" className="-mr-2 flex items-center md:hidden">
                    <button 
                        type="button" 
                        className="hamburger bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400" 
                        aria-expanded="false"
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded);
                          }}
                        >
                        <span className="sr-only">Open main menu</span>
                        {/* <!-- Heroicon name: outline/menu --> */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;