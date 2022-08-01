const mail = {
    from: "pengirim@testing.com",
    sendMessage: function (msg, to) {
        console.log(`you send: ${msg} to ${to} from ${this.from}`);
    }
};
 
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@testing.com');
 
/**
output:
pengirim@testing.com
you send: apakabar to penerima@testing.com from pengirim@testing.com
**/

mail.from = "pengirim2@testing.com";
console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@testing.com');

mail.saveContact = function(addr) {
    console.log(`${addr} saved`);
}
mail.saveContact(`${mail.from}`)