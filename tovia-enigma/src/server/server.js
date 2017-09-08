var express = require("express");
var bodyParser = require("body-parser");
const CryptoJS = require("crypto-js");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/:passphrase", (req, res) => {
  const passphrase = req.params.passphrase;
  const input = req.body.payload;
  const action = req.body.action;
  switch (action) {
    case "encrypt":
      console.log("encrypting");
      const cipherText = encryptData(input, passphrase);
      // console.log(cipherText);
      res.send(cipherText);
      break;
    case "decrypt":
      console.log("decrypting");
      const plainText = decryptData(input, passphrase);
      console.log(plainText);
      res.send(plainText);
      break;
    default:
      console.log("invalid action type");
  }
});

function encryptData(plainText, passphrase) {
  const cipherText = CryptoJS.AES
    .encrypt(JSON.stringify(plainText), passphrase)
    .toString();
  return cipherText;
}

function decryptData(cipherText, passphrase) {
  const bytes = CryptoJS.AES.decrypt(cipherText.toString(), passphrase);
  let decryptedData;
  try {
    decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (e) {
    return decryptedData = { name: "", message:"Incorrect input", expiration:Date.now() }
  }
  console.log("decryptedData", decryptedData);
  if (Date.now() > new Date(decryptedData.expiration))
    return Object.assign(decryptedData, {
      message: "Sorry, this message is expired!"
    });
  return decryptedData
}

exports.startServer = () => {
  app.listen(3001, () => console.log("server connected"));
};
