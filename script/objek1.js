// cara membuat object pada java Script

// 1. object literal

// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
//   nama : 'Biagi',
//   energi : 10,

//   // function di dalam object di sebut method
//   makan : function (porsi) {
//     this.energi += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   }

// }

// 2. object dengan function deklaration
// CONTOH OBJECT.CREATE();





// const methodMahasiswa = {
//   energi: function (energi) {
//     this.energi = energi;
//     console.log("energi awal anda");
//   },

//   makan: function (porsi) {
//     this.energi += porsi;
//     alert("selamat makan");
//   },

//   apel: function (makanApel) {
//     this.makan += makanApel * 2;
//     console.log("selamat anda telah makan");
//   },
// };



// function mahasiswa(nama) {
//   // bikin object mahasiswa sambil membawa property dan method dari object lain
//   let mahasiswa = Object.create(methodMahasiswa);

//   mahasiswa.nama = nama;
//   mahasiswa.energi = methodMahasiswa.energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   // mahasiswa.apel = methodMahasiswa.apel;

//   return mahasiswa;
// }

// let mhs1 = mahasiswa("Biagi");












// menggunakan this

// function Mahasiswa(namalengkap, energi) {
//   // bikin object mahasiswa sambil membawa property dan method dari object lain
//   // let mahasiswa = Object.create(methodMahasiswa);
//   // let mahasiswa = {};

//   // YANG SEBENARNYA TERJADI MENGGUNAKAN THIS
//   // let this = {};
//   // let this = Object.create(Mahasiswa.prototype);

//   this.nama = namalengkap;
//   this.energi = energi;

// }

// // cara membuat prototype
// Mahasiswa.prototype.makan = function (piring) {
//   this.energi += piring;
//   console.log('selamat makan')
// }

// Mahasiswa.prototype.mainML = function ( main ) {
//   this.energi -= main;
//   return `energi kamu berukurang ${'Biagi'}`
// }

// let mhs1 = new Mahasiswa("Biagi", 2);







// versi class

class Mahasiswa {
  // yang di dalamnya kalau kita mau bikin property kita harus buat construcktor
  constructor ( namalengkap , energi) {
    this.nama = namalengkap;
    this. energi = energi

 }

 makan (piring) {
    this.energi += piring;
    console.log('selamat makan')
  }
  
  mainMl ( main ) {
    this.energi -= main;
    return `energi kamu berukurang ${'Biagi'}`
  }


}

// constructor itu sama seperti function yang namanya ada di class dan parameter
// ada di constructor
let mhs1 = new Mahasiswa('Biagi', 2); 



// array angka ini mewarisi semua method dari object array yang asli
let angka = [4,2,3];
console.log(angka.sort())












// 3. object dengan constructor

// function Mahasiswa(nama, umur) {
//   this.nama = nama;
//   this.umur = umur;

//   this.makan = function (porsi) {
//     this.makan = porsi;
//     console.log("Selamat makan");
//   };
// }

// // constructor harus menggunakan new
// let mhs1 = new Mahasiswa("Biagi", 10);
