// veri türleri
const numara = 123
const string = '123'
const boolean = true
const _undefined = undefined
const _null = null
const object = {}
const array = []

// obje
const getDil = 'de'
const sozluk = {
  en: {
    selam: 'hello',
    kalem: 'pen'
  },
  de: {
    selam: 'hallo',
    kalem: 'pen'
  }
}
console.log(sozluk[getDil].selam)

// dizi
const renkler = ['asd', 123, true]
console.log(renkler[0])
console.log(renkler)

const rakamlar = [2, 4, 7]
rakamlar.map((rakam) => {
  const carp = rakam * 2
  console.log(carp)
})
