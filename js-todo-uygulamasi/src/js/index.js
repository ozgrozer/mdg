import './../css/style.scss'

const todolarSecici = document.getElementById('todolar')

const todolar = {
  recZdTw1VkwEjFzS1: { baslik: '123', yapildi: 'true' },
  recwLgIYNdhuqwLK3: { baslik: 'İlk görev.', yapildi: 'false' },
  reczYKjyGars9of3U: { baslik: 'İkinci görev.', yapildi: 'true' }
}

window.todoGuncelle = id => {
  const oncekiYapildiDegeri = todolar[id].yapildi
  const yeniYapildiDegeri = oncekiYapildiDegeri === 'true'
    ? 'false'
    : 'true'
  todolar[id].yapildi = yeniYapildiDegeri

  const todoOgesiSecici = document.querySelector(`div[data-id='${id}']`)
  if (yeniYapildiDegeri === 'true') {
    todoOgesiSecici.classList.add('yapildi')
  } else {
    todoOgesiSecici.classList.remove('yapildi')
  }

  istatistikler()
}

window.todoSil = id => {
  delete todolar[id]
  const todoOgesiSecici = document.querySelector(`div[data-id='${id}']`)
  todoOgesiSecici.parentNode.removeChild(todoOgesiSecici)

  istatistikler()
}

const todoOgesi = props => {
  const yapildiClassName = props.yapildi === 'true'
    ? ' yapildi'
    : ''
  const yapildiChecked = props.yapildi === 'true'
    ? 'checked'
    : ''

  return `
    <div
      data-id="${props.id}"
      class="todo${yapildiClassName}">
      <input
        type="checkbox" ${yapildiChecked}
        onchange="window.todoGuncelle('${props.id}')" />
      <div class="baslik">
        ${props.baslik}
      </div>
      <button
        class="sil"
        onclick="window.todoSil('${props.id}')"
      >
        Sil
      </button>
    </div>
  `
}

const todolarRender = () => {
  let fakeTodolarHtml = ''
  Object.keys(todolar).map((todoId) => {
    const todo = todolar[todoId]
    todo.id = todoId
    fakeTodolarHtml += todoOgesi(todo)
  })
  todolarSecici.innerHTML = fakeTodolarHtml
}

const todoEkle = () => {
  const formSecici = document.getElementById('yeniGorevEklemeFormu')
  formSecici.addEventListener('submit', e => {
    e.preventDefault()
    const gorevBasligiSecici = document.getElementById('gorevBasligi')
    const gorevBasligiDegeri = gorevBasligiSecici.value
    const yeniId = 'red' + Object.keys(todolar).length
    const todo = {
      id: yeniId,
      baslik: gorevBasligiDegeri,
      yapildi: 'false'
    }
    todolar[yeniId] = todo
    const yeniTodoOgesiHtml = todoOgesi(todo)

    gorevBasligiSecici.value = ''
    todolarSecici.insertAdjacentHTML('beforeend', yeniTodoOgesiHtml)

    istatistikler()
  })
}

const istatistikler = () => {
  let yapilanlar = 0
  let yapilmayanlar = 0
  Object.keys(todolar).map(todoId => {
    const todo = todolar[todoId]
    if (todo.yapildi === 'true') {
      yapilanlar++
    } else {
      yapilmayanlar++
    }
  })
  const toplamOge = Object.keys(todolar).length
  const yapilanOgeler = yapilanlar
  const yapilmayanOgeler = yapilmayanlar

  const toplamOgeSecici = document.getElementById('toplamOge')
  toplamOgeSecici.innerHTML = `
    <div>Toplam: ${toplamOge}</div>
    <div>Yapılan: ${yapilanOgeler}</div>
    <div>Yapılmayan: ${yapilmayanOgeler}</div>
  `
}

todolarRender()
todoEkle()
istatistikler()
