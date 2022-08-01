// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
// class ChildClassName extends ParentClassName{}
 
 
// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// ChildClassName.prototype = new ParentClassName()

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
    constructor(author) {
        super(author);
        this.username = 'ajo buset';
        this.isBussinessAccount = true;
    }
    myProfile() {
        return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
    }
}

const wa1 = new WhatsApp('08927465178683812427');
console.log(wa1.myProfile());
// my name ajo buset, is Business
wa1.sendMessage('lagu tadi lah den puta', '08927465178683812427');
