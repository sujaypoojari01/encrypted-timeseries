const CryptoJS = require("crypto-js");
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
        origin: '*'
    }
});
const fileData = require('../data.json')

const key = '7d7cd92a9c3055f30f8943b5092abb8e'
const secret = 'abcdefg';

const emitData = async (io) =>{
    io.on('connection', (socket) => {
        for(let i = 0;  i< fileData.names.length; i++){
            let dataObject = {names: fileData.names[i], origin: fileData.cities[i], destination: fileData.cities[i === 0 ? (fileData.names.length-1) : (fileData.names.length-i)]}
            let hash = CryptoJS.HmacSHA256(dataObject, secret)
            dataObject['secret_key'] = hash.toString(CryptoJS.enc.Hex)
            const cipherText = CryptoJS.AES.encrypt(JSON.stringify(dataObject), key).toString();
            setInterval(() => {
                socket.emit('dataEmit', cipherText)
              }, 10000);
            
        }
    });
}


module.exports = {
    emitData
}