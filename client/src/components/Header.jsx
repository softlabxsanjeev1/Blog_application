import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';


function Header() {
    const path = useLocation().pathname;

    return (
        <Navbar className='border-b-2 border-orange-400 bg-red-500'>
            <Link to="/" className='self-center whitespace-nowrap text-sm
            sm:text-xl font-semibold dark:text-white'>
                <span className='px-3 py-2 bg-blue-500 text-white rounded-lg'>Tech Blog</span>
            </Link>
            <form>
                <TextInput
                    type='text'
                    placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                // value={}
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button
                    className='w-12 h-10 hidden sm:inline'
                    color='gray'
                    pill
                // onClick={() => dispatch(toggleTheme())}
                >
                    <FaMoon />
                    {/* {theme === 'light' ? <FaSun /> : <FaMoon />} */}
                </Button>
                <Link to='/sign-in'>
                    <Button color="blue">
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    active={path === '/'} as={'div'}
                >
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link
                    active={path === '/about'} as={'div'}
                >
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                <Navbar.Link
                    active={path === '/projects'} as={'div'}
                >
                    <Link to='/projects'>Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header