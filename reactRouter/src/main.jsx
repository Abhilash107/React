import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import  User  from './components/User/User.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

//* creating a Router
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element: <About/> 
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
      
//     ]
//   }
// ])
// alt method
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >//* /

      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>

      {/* <Route path='about' element={<About/>}> //* /about
      <Route path='abhilash'/> //* /about/abhilash
      </Route> */}
      
      <Route path='contact' element={<Contact/>}/> //* /contact
      <Route path='user/:id' element={<User/>}/> //* /user/:id
      <Route 
      loader={githubInfoLoader}
      // use loader for optimized fetching data
      path='github' 
      element={<Github/>}
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
