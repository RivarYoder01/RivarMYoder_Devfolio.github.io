import { useState } from 'react'
import '../index.css'
import { signin } from '../store/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector((state) => state.auth?.user ?? false)
    const error = useSelector((state) => state.auth?.error ?? false)
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault()
        dispatch(signin({username, password}))
        .then(() => {
            setUsername('')
            setPassword('')
        })
    }

    return (
        <div className='bg-black'>
            <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-emerald-600 mt-40 h-84 bg-[url(/cover_photo.jpg)] bg-cover bg-bottom rounded-l"' onSubmit={submitHandler}>
                <h3 className='pb-6 text-2xl text-center text-white'>Admin Sign In</h3>
                <label className='block mb-1 text-xl text-white' htmlFor='username'>Username</label>
                <input className='w-full h-8 p-1 mb-6 bg-white focus:outline-none' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <label className='block mb-1 text-xl text-white' htmlFor='password'>Password</label>
                <input className='w-full h-8 p-1 mb-6 bg-white focus:outline-none' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className='flex justify-between'>
                    <button className='px-3 py-1 rounded-sm bg-emerald-600 hover:bg-green-700' type='button'>Cancel</button>
                    <button className='px-3 py-1 rounded-sm bg-emerald-600 hover:bg-green-700' type='submit'>Submit</button>
                </div>
                {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
                {user ? <Navigate to='/profile' replace={true} /> : null }
            </form>
        </div>
    );
}

export default Signin;
