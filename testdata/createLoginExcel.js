// testdata/createLoginExcel.js
// Run ONCE: node testdata/createLoginExcel.js

const XLSX = require('xlsx');
const path = require('path');

const loginData = [
  {
    TestCase: 'valid_credentials',
    Username: 'bunny@189.com',
    Password: 'Password@777'
  },
  {
    TestCase: 'unregistered_valid',
    Username: 'notregistered@test.com',
    Password: 'Password@777'
  },
  {
    TestCase: 'valid_user_numeric_pass',
    Username: 'bunny@189.com',
    Password: 'Password123'
  },
  {
    TestCase: 'valid_user_short_pass',
    Username: 'bunny@189.com',
    Password: 'Ab@12'
  },
  {
    TestCase: 'unregistered_both',
    Username: 'fake@test.com',
    Password: 'FakePass@1'
  },
  {
    TestCase: 'invalid_user_valid_pass',
    Username: 'nobody@test.com',
    Password: 'Password@777'
  },
];

const workbook  = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(loginData);

worksheet['!cols'] = [
  { wch: 30 },
  { wch: 35 },
  { wch: 20 },
];

XLSX.utils.book_append_sheet(workbook, worksheet, 'LoginData');
XLSX.writeFile(workbook, path.join(__dirname, 'loginData.xlsx'));

console.log('loginData.xlsx created successfully!');
loginData.forEach(row => console.log('  - ' + row.TestCase));