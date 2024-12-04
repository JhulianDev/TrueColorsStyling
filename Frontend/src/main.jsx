import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import "./assets/styles/Normalize.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)