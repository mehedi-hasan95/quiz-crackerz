import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <header className="p-4 bg-gray-100 dark:text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <Link rel="noopener noreferrer" to='/' aria-label="Back to homepage" className="flex items-center p-2">
                        <h2 className='text-2xl text-violet-400 font-extrabold'>Quizzly Beers</h2>
                    </Link>
                    <div>
                        <ul className={`md:flex absolute md:static p-4 duration-500 ease-in ${open ? 'top-4' : 'top-[-120px]'}`}>
                            <li className="flex">
                                <NavLink rel="noopener noreferrer" to='/' className="flex items-center px-4 -mb-1 text-lg font-bold">Home</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink rel="noopener noreferrer" to='/topics' className="flex items-center px-4 -mb-1 text-lg font-bold">Topics</NavLink>
                            </li>
                            <li className="flex">
                                <NavLink rel="noopener noreferrer" to='/blog' className="flex items-center px-4 -mb-1 text-lg font-bold">Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden pt-4">
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;