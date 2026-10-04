const fs = require('fs');
const filePath = './js/data.js';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/author:\s*"李博"/g, 'author: "机场 TOP1"');
content = content.replace(/李博个人一直在用的主力机场/g, '本站个人一直在用的主力机场');
content = content.replace(/老站长李博揭露/g, '机场 TOP1 揭露');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully replaced all author and brand instances in data.js!');
