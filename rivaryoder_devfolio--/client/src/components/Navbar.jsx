import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/authSlice.jsx'

export default function Navbar() {
    const loggedIn = useSelector((state) => state.auth?.isLoggedIn ?? false)
    const dispatch = useDispatch()
    return (
        <header className="bg-linear-65 from-emerald-600 to-green-700 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700    flex flex-wrap items-center text-base justify-center">
                    <Link to='/' className='text-2xl font-medium text-white'>
                        <span className='text-cyan-400'>Rivar Yoder</span>
                    </Link>
                    {loggedIn ?
                        <ul className='flex items-center h-16 text-xl'>
                            <li> <Link to='/profile'>Profile</Link></li>
                            <li> <Link className='pl-20'to='/find-friends'>Friends</Link></li>
                            <li className='pl-20'><Link to='/' onClick={() => dispatch(logout())}>Logout</Link></li>
                        </ul>
                        :
                        <ul className='flex items-center h-16 text-xl'>
                            <li> <Link to='/signup'>Sign Up</Link></li>
                            <li className='pl-20'><Link to='/signin'>Sign In</Link></li>
                        </ul>
                    }
                </nav>
            </div>
        </header>
    );
}
