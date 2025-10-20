/**
 * Script de utilidad para codificar emails y teléfonos
 * Ejecutar: node encode-data.js
 */

function rot13(str) {
  return str.replace(/[a-zA-Z0-9]/g, (char) => {
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97);
    } else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
    } else if (char >= '0' && char <= '9') {
      return String.fromCharCode(((char.charCodeAt(0) - 48 + 5) % 10) + 48);
    }
    return char;
  });
}

function encodeEmail(email) {
  const rot13Email = rot13(email);
  return Buffer.from(rot13Email).toString('base64');
}

function encodePhone(phone) {
  const cleanPhone = phone.replace(/\s+/g, '');
  const rot13Phone = rot13(cleanPhone);
  return Buffer.from(rot13Phone).toString('base64');
}

// Datos a codificar
const contacts = {
  emails: [
    'jserida@esan.edu.pe',
    'mmollo@esan.edu.pe',
    'red_riesgird-acc_pe@esan.edu.pe'
  ],
  phones: [
    '+51 998 678 236',
    '998678236'
  ]
};

console.log('=== EMAILS CODIFICADOS ===');
contacts.emails.forEach(email => {
  console.log(`Original: ${email}`);
  console.log(`Encoded:  ${encodeEmail(email)}`);
  console.log('---');
});

console.log('\n=== TELÉFONOS CODIFICADOS ===');
contacts.phones.forEach(phone => {
  console.log(`Original: ${phone}`);
  console.log(`Encoded:  ${encodePhone(phone)}`);
  console.log('---');
});

// Exportar para uso en otros scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { encodeEmail, encodePhone, rot13 };
}
