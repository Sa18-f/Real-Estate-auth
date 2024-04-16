import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Routes from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import FirebaseProvider from './Pages/FirebaseProvider/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={Routes} />
    </FirebaseProvider>
  </React.StrictMode>,
)
