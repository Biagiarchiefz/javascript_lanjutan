// function deklaration

// function panggilNama ( nama ) {
//   console.log('halo ' + nama )
// }

// panggilNama('Biagi')


// function expretion

// let panggilNama = function ( nama ) {
//   console.log('halo '+ nama )
// } 

// panggilNama ('asep')


// arrow function
   // kalau satu parameter bisa tidak menggunakan parameter di kurungnya
   // bahkan kita tidak menggunakan kurung kurawa dan return bisa seperti yang di contoh 3

  // CONTOH 1
let panggilNama = nama  => {
  console.log('halo '+ nama )
}

panggilNama('adi')
 
  // CONTOH 2
const perkenalan =  (nama)  => {
  return `halo ${nama}`
}

console.log( perkenalan('opet'))

  // CONTOH 3
    // implisit return
  const intro =  nama  => 
  `halo ${nama}`
  
  console.log( perkenalan('opet'))


// CONTOH 4
const ucap = ( name , waktu ) => {
  return `halo ${name}, selamat ${waktu}`
} 

console.log(ucap('hadi', 'pagi'))

// CONTOH 5 
  // dan kalau tidak menggunakan parameter kita wajib menggunakan tutup kurungnya

  const kelek = ( ) => 
    console.log('haiiii adik adik')
  

  kelek()

// CONTOH 6 
  // kalau misalkan kita ingin menghitung jumlah huruf di dalam array

  const mhs = ['Biagi archie', 'iksan fahriza']

  // const hitungNama = mhs.map ( function ( nama ) {
  //   return nama.length
  // });

  // console.log(hitungNama);

   // menggunakan arrow function
  const hitungNama = mhs.map ( nama => nama.length );
  console.log(hitungNama);


// CONTOH 7
  // kalau misalkan kita ingin menghitung jumlah huruf di dalam array
  // dan mengembalikan object

  const daftarNama = mhs.map( nama => ({nama : nama, jumlahHuruf : nama.length}) );
  console.table(daftarNama)

  // dan kita juga bisa mengahapus o



  




  

