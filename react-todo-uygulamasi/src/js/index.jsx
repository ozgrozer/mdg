import React from 'react'
import ReactDOM from 'react-dom'

import './../css/style.scss'

import { MainProvider } from './komponentler/MainContext'
import TodoEkle from './komponentler/TodoEkle'
import TodolariListele from './komponentler/TodolariListele'

const App = () => {
  return (
    <MainProvider>
      <div className='konteyner'>
        <TodoEkle />
        <TodolariListele />
      </div>
    </MainProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
