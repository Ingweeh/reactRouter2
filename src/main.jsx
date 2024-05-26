import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Item from './component/Item.jsx';

const list = ["a","b","c","d","e","f","g","h","i"];
const router = createBrowserRouter([
  {
    path:'/',
    element: <>
    <h1>TodoList</h1>
    <a href='/1'>Todo1</a><br/>
    <a href='/2'>Todo2</a><br/>
    <a href='/3'>Todo3</a><br/>
    <a href='/4'>Todo4</a><br/>
    <a href='/5'>Todo5</a><br/>
    <a href='/6'>Todo6</a><br/>
    <a href='/7'>Todo7</a><br/>
    <a href='/8'>Todo8</a><br/>
    <a href='/9'>Todo9</a>
    </>
  },
  {
    path: '/:numbers',
    element: <Item list={list}/>
  }
]);
export default function main(){

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
