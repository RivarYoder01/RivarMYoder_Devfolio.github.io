import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice.jsx'

export default function Navbar() {
    const loggedIn = useSelector((state) => state.auth?.isLoggedIn ?? false)
    const dispatch = useDispatch()
    return (
        <header className="bg-linear-65 from-emerald-600 to-green-700 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to='/' className='text-2xl font-medium text-white'>
                    <span className='text-purple-100'>Rivar M Yoder</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
                    {loggedIn ?
                        <ul className='flex items-center h-12 text-xl'>
                            {/*<li> <Link to='/profile'>Home</Link></li>*/}
                            <li className='pl-20'><Link to='/' onClick={() => dispatch(logout())}>Sign out</Link></li>
                        </ul>
                        :
                        <ul className='flex items-center h-12 text-xl'>
                            <li> <Link to='/'>Home</Link></li>
                            <li className='pl-20'><Link to='/signin'>Sign In</Link></li>
                        </ul>
                    }
                </nav>
            </div>
        </header>
    );
}
