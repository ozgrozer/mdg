import React, { useContext, useEffect } from 'react'

import { airtableSelect, airtableUpdate, airtableDestroy } from './../functions/airtable'
import { MainContext } from './MainContext'

const TodolariListele = () => {
  const [state, setState] = useContext(MainContext)
  const todolar = state.todolar

  useEffect(() => {
    airtableSelect({
      base: 'todolar'
    })
      .then((res) => {
        setState(() => ({
          todolar: res
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const todoSil = todoId => {
    airtableDestroy({
      base: 'todolar',
      id: todoId
    })
      .then((deletedId) => {
        delete todolar[todoId]
        const yeniTodolar = Object.assign({}, todolar)
        setState(() => ({
          todolar: yeniTodolar
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const todoGuncelle = todoId => {
    const yapildi = todolar[todoId].yapildi
    const yeniYapildiDegeri = yapildi === 'true' ? 'false' : 'true'

    airtableUpdate({
      base: 'todolar',
      id: todoId,
      values: {
        yapildi: yeniYapildiDegeri
      }
    })
      .then(() => {
        todolar[todoId].yapildi = yeniYapildiDegeri
        const yeniTodolar = Object.assign({}, todolar)

        setState(() => ({
          todolar: yeniTodolar
        }))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div id='todolariListele'>
      <div className='todolar'>
        {Object.keys(todolar).length ? (
          Object.keys(todolar).map((key) => {
            const todo = todolar[key]
            const yapildiClassName = todo.yapildi === 'true' ? ' yapildi' : ''
            const yapildiChecked = todo.yapildi === 'true'

            return (
              <div key={key} className={`todo${yapildiClassName}`}>
                <input
                  type='checkbox'
                  defaultChecked={yapildiChecked}
                  onChange={() => todoGuncelle(key)}
                />

                <div className='baslik'>
                  {todo.baslik}
                </div>

                <button
                  className='sil'
                  onClick={() => todoSil(key)}
                >
                  Sil
                </button>
              </div>
            )
          })
        ) : (
          <div className='todo'>Henüz hiç todo eklenmedi.</div>
        )}
      </div>
    </div>
  )
}

export default TodolariListele
