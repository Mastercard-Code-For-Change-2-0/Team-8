const crypto = require("crypto");

const key = Buffer.from(
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
  "hex"
); // 32 bytes
const iv = Buffer.from("abcdef9876543210abcdef9876543210", "hex"); // 16 bytes

function encrypt(data) {
  const cipher = crypto.createCipheriv("aes-256-cfb", key, iv);
  let encrypted = cipher.update(data, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}

function decrypt(encrypted) {
  const decipher = crypto.createDecipheriv("aes-256-cfb", key, iv);
  let decrypted = decipher.update(encrypted, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

module.exports = { encrypt, decrypt };