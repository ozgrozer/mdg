import React from 'react'
import ReactDOM from 'react-dom'

import './../css/style.scss'

import TodoEkle from './components/TodoEkle'
import TodolariListele from './components/TodolariListele'

import { MainProvider } from './components/MainContext'

const App = () => {
  return (
    <div className='container'>
      <TodoEkle />
      <TodolariListele />
    </div>
  )
}

const Main = () => {
  return (
    <MainProvider>
      <App />
    </MainProvider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
