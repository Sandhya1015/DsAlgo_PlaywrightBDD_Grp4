// testdata/registerData.js
const XLSX = require('xlsx');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'registerData.xlsx');

function getRegisterData(rowKey) {
  const workbook = XLSX.readFile(FILE_PATH);
  const rows     = XLSX.utils.sheet_to_json(workbook.Sheets['RegisterData']);
  const row      = rows.find(r => r.TestCase === rowKey);

  if (!row) {
    throw new Error(
      'Register Excel key not found: ' + rowKey +
      '. Available: ' + rows.map(r => r.TestCase).join(', ')
    );
  }

  return {
    username:        String(row.Username        || ''),
    password:        String(row.Password        || ''),
    confirmPassword: String(row.ConfirmPassword || ''),
    expectedResult:  String(row.ExpectedResult  || ''),
  };
}

module.exports = { getRegisterData };