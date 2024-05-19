import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import MyBooksPage from './pages/MyBooksPage'
import OnBookPage from './pages/OnBookPage'
import { BookProvider } from './Components/state/BookContext'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
}, 
{
  path: '/myBooks',
  element: <MyBooksPage/>,
  errorElement: <NotFoundPage />,
},
{
  path: '/OnBooks/:bookCategory/:bookId',
  element: <OnBookPage />,
  errorElement: <NotFoundPage />,
}]);





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookProvider>
   <RouterProvider router={router} />
   </BookProvider>
  </React.StrictMode>,
)
