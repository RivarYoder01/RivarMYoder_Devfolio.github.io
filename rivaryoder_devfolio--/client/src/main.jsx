import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { store } from './store/store.jsx';
import { Provider } from 'react-redux';
import Signin from './pages/signin.jsx';
import Profile from './pages/profile.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import Error from './pages/error.jsx';
import './index.css'
import './App.css'
import App from './App.jsx'

const router = createBrowserRouter(
    createRoutesFromElements((
        <Route path='/' element={<RootLayout /> }>
            <Route index element={<App />}/>
            <Route path='/signin' element={<Signin />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='*' element={<Error />} />
        </Route>
    ))
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store} className='text-gray-400 body-font'>
          <RouterProvider router={router} />
      </Provider>
  </StrictMode>,
)
