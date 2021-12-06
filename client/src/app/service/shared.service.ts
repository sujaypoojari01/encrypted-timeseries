import * as CryptoJS from 'crypto-js';
// import * as Crypto from 'crypto';
const key = '7d7cd92a9c3055f30f8943b5092abb8e'

export class SharedService {
  constructor() { }
  secret = 'abcdefg';
  decrypt(data: string): any{
    try{
      var bytes  = CryptoJS.AES.decrypt(data, key);
      let originObject = bytes.toString(CryptoJS.enc.Utf8);
      return originObject
    }catch (error){
      console.log('Failed in decrypt : - ', error)
    }
  }

  validateHash(data: string) {
    let object = JSON.parse(data)
    const {secret_key, ...originalObject} = object
    let newHash = CryptoJS.HmacSHA256(originalObject, this.secret)
    if(secret_key === newHash.toString(CryptoJS.enc.Hex)){
      return true
    } else return false
  }

}




  