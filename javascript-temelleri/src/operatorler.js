// aritmetik operatörler
/* const toplama = 2 + 2
const cikarma = 2 - 2
const carpma = 2 * 2
const bolme = 2 / 2
const bolmedenKalan = 2 % 2
let arttirilacak = 5
const arttirma = ++arttirilacak
let azaltilacak = 5
const azaltma = ++azaltilacak

const sonuc = {
  toplama,
  cikarma,
  carpma,
  bolme,
  bolmedenKalan,
  arttirma,
  azaltma
}
console.log(sonuc) */

// karşılaştırma operatörleri
/* const deger1 = 123
const deger2 = '123'

if (deger1 === deger2) {
  console.log('eşit')
} else {
  console.log('eşit değil')
}

if (deger1 !== deger2) {
  console.log('eşit değil')
} else {
  console.log('eşit')
}

const getDil = 'ar'
if (getDil !== 'ar') {
  console.log('soldan sağa')
}

const rakam1 = 4
const rakam2 = 3

if (rakam1 > rakam2) {
  console.log(`${rakam1} büyüktür ${rakam2}`)
} else {
  console.log(`${rakam1} büyük değildir ${rakam2}`)
}

if (rakam1 >= rakam2) {
  console.log(`${rakam1} büyüktür veya eşittir ${rakam2}`)
} else {
  console.log(`${rakam1} büyük değildir veya eşit değildir ${rakam2}`)
} */

// mantıksal operatörler
/* const rakam3 = 5
const rakam4 = 3
const yazi1 = 'selam'
const yazi2 = 'hello'

if ((rakam3 > rakam4) && (yazi1 === yazi2)) {
  console.log('evet')
} else {
  console.log('hayır')
}

if ((rakam3 > rakam4) || (yazi1 === yazi2)) {
  console.log('evet')
} else {
  console.log('hayır')
}

const asd = true
const asd2 = !asd
console.log(asd)
console.log(asd2) */

// atama operatörleri
/* let rakam5 = 5
const rakam6 = 6
// rakam5 += rakam6
rakam5 = rakam5 + rakam6
console.log(rakam5) */

// özel operatörler
// koşullu operatör
/* const rakam7 = 7
const rakam8 = 8

const sonuc1 = rakam7 === rakam8 ? 'eşit' : 'eşit değil'

let sonuc2 = null
if (rakam7 === rakam8) {
  sonuc2 = 'eşit'
} else {
  sonuc2 = 'eşit değil'
}
console.log(sonuc1)
console.log(sonuc2) */

// virgül operatörü
let j = 9
for (let i = 0; i < 10; i++, j--) {
  console.log({ i, j })
}
