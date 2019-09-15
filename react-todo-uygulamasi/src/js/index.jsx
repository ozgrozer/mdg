import React from 'react'
import ReactDOM from 'react-dom'

import './../css/style.scss'

import TodoEkle from './komponentler/TodoEkle'
import TodolariListele from './komponentler/TodolariListele'

import { MainProvider } from './komponentler/MainContext'

const App = () => {
  return (
    <div className='konteyner'>
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
