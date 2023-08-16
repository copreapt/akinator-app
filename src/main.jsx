import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css'
import './index.css'
import { UserProvider } from './context/user_context.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
