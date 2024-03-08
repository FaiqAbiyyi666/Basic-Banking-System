class BankAccount {
  constructor(saldo) {
    this.saldo = saldo;
  }

  deposit() {
    return new Promise((resolve, reject) => {
      const amount = Number(
        window.prompt("Masukkan jumlah saldo yang ingin tambah")
      );

      if (!isNaN(amount) && amount > 0) {
        setTimeout(() => {
          this.saldo += amount;
          resolve(
            window.alert(
              `Anda sudah memasukkan saldo sebesar Rp.${this.saldo}\nSaldo anda saat ini sebesar Rp.${this.saldo}`
            )
          );
        }, 1000);
      } else {
        reject(
          window.alert("Masukkan angka yang valid dan lebih besar dari 0")
        );
      }
    });
  }

  withdraw() {
    return new Promise((resolve, reject) => {
      const amount = Number(
        window.prompt("Masukkan jumlah saldo yang ingin tambah")
      );

      if (!isNaN(amount) && amount > 0 && this.saldo >= amount) {
        setTimeout(() => {
          this.saldo -= amount;
          resolve(
            window.alert(
              `Anda sudah menarik saldo sebesar Rp.${this.saldo}\nSaldo anda saat ini sebesar Rp.${this.saldo}`
            )
          );
        }, 1000);
      } else if (amount <= 0) {
        reject(
          window.alert("Masukkan angka yang valid dan lebih besar dari 0")
        );
      } else {
        reject(window.alert(`Dana anda tidak mencukupi untuk ditarik!`));
      }
    });
  }
}
const account = new BankAccount(0);

async function main() {
  let ulang = true;

  while (ulang) {
    let menu = window.prompt(
      "Menu: \n1. Deposit Dana \n2. Penarikan Dana \n3. Exit"
    );

    switch (menu) {
      case "1":
        try {
          const message = await account.deposit();
          window.alert(message);
        } catch (error) {
          console.error(error);
          window.alert(error);
        }
        break;
      case "2":
        try {
          const message = await account.withdraw();
          window.alert(message);
        } catch (error) {
          console.error(error);
          window.alert(error);
        }
        break;
      case "3":
        ulang = false;
        break;
      default:
        window.alert("Menu Invalid!");
    }
  }
}

main();
