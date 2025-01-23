import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Shop from './pages/Shop'
import About from './pages/About'
import Detail from './pages/detail/Detail'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/admin',
        element: <Admin />
      },
      {
        path: '/basket',
        element: <Basket />
      },
      {
        path: '/shop',
        element: <Shop />
      },
      {
        path: '/about',
        element: <About />
      }, {
        path: '/detail/:id',
        element: < Detail />
      },
    ]
  }, 
  {
    path:"*",
    element:<NotFound />
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
