import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// creating router
const router = createBrowserRouter([
  {
    path: '/'
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
)
