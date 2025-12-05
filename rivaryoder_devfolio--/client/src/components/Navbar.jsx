import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice.jsx'

export default function Navbar() {
    const loggedIn = useSelector((state) => state.auth?.isLoggedIn ?? false)
    const dispatch = useDispatch()
    return (
        <header className="absolute top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex items-center pl-10 pr-10 pt-5">
                <Link to='/' className='font-medium text-white'>
                    <span className='text-purple-100'>Rivar M Yoder | Devfolio</span>
                </Link>
                <nav className="md:ml-auto md:mr-4 md:py-1 md:pl-4 flex flex-wrap items-center justify-end">
                    {loggedIn ?
                        <ul className='flex items-center h-12 text-white transition delay-50 duration-300 ease-in-out hover:text-yellow-300'>
                            {/*<li> <Link to='/profile'>Home</Link></li>*/}
                            <li className='pl-20'><Link to='/' onClick={() => dispatch(logout())}>Sign out</Link></li>
                        </ul>
                        :
                        <ul className='flex items-center h-12 text-white transition delay-50 duration-300 ease-in-out hover:text-yellow-300'>
                            {/*<li> <Link to='/'>Home</Link></li>*/}
                            <li className='pl-20'><Link to='/signin'>Admin</Link></li>
                        </ul>
                    }
                </nav>
            </div>
        </header>
    );
}
