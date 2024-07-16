import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const elemment = document.getElementById('root')
const root = ReactDOM.createRoot(elemment)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)