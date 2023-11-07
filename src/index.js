import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HomeDefault } from './Components/HomeDefault/HomeDefault';
import { Home } from './Components/Home/Home';
import { PinImage } from './Components/PinImage/PinImage';
import { store } from './Store/store';
import Auth from './Components/Auth';

const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={(
        <Auth>
        <Home/>
        </Auth>
      )}/> 
      <Route path='/pin/:id' element={<PinImage/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
