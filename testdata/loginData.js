// testdata/loginData.js
// Reads login test data from loginData.xlsx

const XLSX = require('xlsx');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'loginData.xlsx');

function getLoginData(rowKey) {
  const workbook = XLSX.readFile(FILE_PATH);
  const rows     = XLSX.utils.sheet_to_json(workbook.Sheets['LoginData']);
  const row      = rows.find(r => r.TestCase === rowKey);

  if (!row) {
    throw new Error(
      'Login Excel key not found: ' + rowKey +
      '. Available: ' + rows.map(r => r.TestCase).join(', ')
    );
  }

  return {
    username: String(row.Username || ''),
    password: String(row.Password || ''),
  };
}

module.exports = { getLoginData };