// cara 1
class Mail {
    constructor() {
        this.from = 'pengirim@dicoding.com';
        this.contacts = [];
        this.yourOtherProperty = 'the values';
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this.contacts.push(to); // menyimpan kontak baru
    };
}

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com');
/**
output-nya berhasil:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/

//Mail.sendMessage('hallo', 'penerima@dicoding.com'); //error