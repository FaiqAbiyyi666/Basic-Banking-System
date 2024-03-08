let saldo = 0;
alert("Saldo yang anda miliki saat ini adalah " + saldo);

let ulang = true;

while (ulang) {
  let menu = window.prompt("Menu: \n1. Penjumlahan \n2. Pengurangan \n3. Exit");
  switch (menu) {
    case "1":
      tambahSaldo();
      break;
    case "2":
      kurangiSaldo();
      break;
    case "3":
      ulang = false;
      break;
    default:
      window.alert("Menu Invalid!");
  }
}

function tambahSaldo() {
  let tambah = Number(
    // merubah input string menjadi number
    window.prompt("Masukkan jumlah saldo yang ingin tambah")
  );

  if (tambah != NaN && tambah > 0) {
    saldo += tambah;
    alert("Saldo yang anda miliki saat ini adalah " + saldo);
  } else {
    alert("Masukkan angka yang valid dan lebih besar dari 0");
  }
}

function kurangiSaldo() {
  let kurang = Number(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi")
  );

  if (kurang != NaN && kurang > 0) {
    saldo -= kurang;
    alert("Saldo yang anda miliki saat ini adalah " + saldo);
  } else {
    alert("Masukkan angka yang valid dan lebih besar dari 0");
  }
}
