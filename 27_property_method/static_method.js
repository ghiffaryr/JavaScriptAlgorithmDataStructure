class Mail{
    static isValidPhone(phone) {
      return typeof phone === 'number';
    }
}

Mail.isValidPhone(089000000000) //true