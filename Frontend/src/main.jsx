import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import "./assets/styles/styles.css"
import '@fontsource-variable/inter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router} />
)