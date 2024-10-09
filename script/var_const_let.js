
// function scope
// for (var i = 0 ; i < 10 ; i++ ) {
//   console.log(i)
// }

// console.log(i)
// console.log('\n')



// block scope 
// for (let a = 0 ; a < 10 ; a++ ) {
//   console.log(a)
// }

// console.log(a)



// PERBEDAAN LET DAN CONST
// kalau kita yakin isi dari variable tidak berubah maka kita gunakan const

// CONTOH 1
// let a = 10;
//     // kalau kita yakin isi dari variable (a) tidak akan berubah makan kita memakai const
//     const a = 10;

// CONTOH 2
  // variabel const tidak nilainya tidak bisa di isi ulang
  // menggunakan const untuk meminimalisir perubaha state
  // const b = 2;
  //  b = 5;
  //  console.log(b)

// CONTOH 3
  const mhs = {
    nama : 'Biagi Archie Fias',
    umur : 10
  }

  mhs.umur = 15;
  console.log(mhs.umur)
  // kalau begini bisa dirubah asalkan kita tidak menganti objectnya
