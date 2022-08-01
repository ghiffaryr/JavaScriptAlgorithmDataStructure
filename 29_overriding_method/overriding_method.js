class Mail {
    constructor(author) {
        this.from = author;
        this._contacts = [];
    }
    sendMessage(msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
        this._contacts.push(to);
    }
    showAllContacts() {
        return this._contacts;
    }
}

class WhatsApp extends Mail {
    constructor(username, isBussinessAccount, phoneNumber) {
        super(phoneNumber);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        super.sendMessage(msg, to);
        console.log('Send by WA');
    }
}

const wa1 = new WhatsApp('ajo buset', true, '08927465178683812427');
wa1.sendMessage('lagu tadi lah den puta', '08927465178683812427');
 
/**
Output:
you send: halo to 089000999888 from 089000999888
Send by WA
**/