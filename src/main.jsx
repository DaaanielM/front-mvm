import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Admin from './components/Admin/Admin';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/admin',
		element: <Admin />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
