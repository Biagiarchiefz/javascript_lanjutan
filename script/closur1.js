// 2.1 execution context, hoisting & scope

// dua fase pada execution context

// 1. creation
// 2. execution

// intinya javascript ngk lansgung deklarasi variable dan function yang kita buat,
// tapi dibuat nilai default dlu dengan nilai undifined,
// nah proses dibuat nilai default ini disebut hoisting


console.log(nama);
var nama = 'Biagi Archie Fais';

// * creation phase pada global context (pada file javascript langsung )

// f.1 pada fase creation ini javascrpt akan mengecek apakah ada variabel atau function di dalam codinganya
// tidak memperdulikan (conlose.lognya)

// f.2 kalau ada dia akan membuat si varible tersebut diisi dengan nilai undefined
// dan kalau ada function dia akan di isi dengan function itu sendiri
// contoh
// var nama = undefined;
// nama function = fn(); 

// f.3 konsep ini disebut dengan hoisting 



// ~ setelah creation phase baru

// * execution phase ( mengesekusi programnya baris perbaris dari atas ke bawah )



























// var nama = 'Biagi Archie Fais';
// var username = 'biagiarchiefz'

// function cetakUrl (username) {
//   var instagramUrl = 'http://instagram.com/';
//   return instagramUrl + username
// }

// console.log(cetakUrl(username))