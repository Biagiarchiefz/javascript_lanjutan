function init() {
  // let nama = "Biagi Archie Fais";

  function tampilNama(nama) {
    // function tampilNama ini disebut dengan innerFunction
    console.log(nama);
  }

  return tampilNama;
}

let panggil = init();
panggil("api");

// membutuhkan variable nama dari parentnya itu namanya disebut closur

// closur adalah menggambil data dari function parent function tersebut





// CONTOH 2

// ini disebut dengan factory function ( kita bikin function sesuai dengan function yang lain )
function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
  };
}

let selamatPagi = ucapkanSalam("pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Reza");







// CONTOH 3

let add = function () {
  let jumlah = 0;

  return function () {
    return console.log (jumlah++);
  };

};

let a = add();
a();
a();
a();
a();
a();
a();
a();
