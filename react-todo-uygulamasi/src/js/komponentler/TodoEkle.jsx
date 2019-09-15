import React, { useContext, useState } from 'react'

import { airtableCreate } from './../fonksiyonlar/airtable'
import { MainContext } from './MainContext'

const TodoEkle = () => {
  const [state, setState] = useContext(MainContext)
  const todolar = state.todolar
  const toplamOge = Object.keys(todolar).length

  let yapilan = 0
  let yapilmayan = 0

  Object.keys(todolar).map((key) => {
    const todo = todolar[key]
    if (todo.yapildi) {
      yapilan++
    } else {
      yapilmayan++
    }
  })

  const [inputDegeri, setInputDegeri] = useState('')

  const todoEkle = e => {
    e.preventDefault()

    if (inputDegeri) {
      const yeniOge = {
        baslik: inputDegeri,
        yapildi: 'false'
      }

      airtableCreate({
        base: 'todolar',
        values: yeniOge
      })
        .then(getId => {
          todolar[getId] = yeniOge

          const yeniTodolar = Object.assign({}, todolar)

          setState(() => ({
            todolar: yeniTodolar
          }))

          setInputDegeri('')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const inputOnChange = e => {
    const value = e.target.value
    setInputDegeri(value)
  }

  return (
    <div id='todoEkle'>
      <form onSubmit={todoEkle}>
        <input
          type='text'
          value={inputDegeri}
          onChange={inputOnChange}
          placeholder='Bir görev girin...'
        />
        <button>Ekle</button>
      </form>

      <div className='toplamOge'>
        <div>Toplam: {toplamOge}</div>
        <div>Yapılan: {yapilan}</div>
        <div>Yapılmayan: {yapilmayan}</div>
      </div>
    </div>
  )
}

export default TodoEkle
