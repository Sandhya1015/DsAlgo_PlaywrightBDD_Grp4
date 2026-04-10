// testdata/pythonData.js
// Reads Python editor test data from pythonData.xlsx

const XLSX = require('xlsx');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'pythonData.xlsx');

function getPythonData(rowKey) {
  const workbook = XLSX.readFile(FILE_PATH);
  const rows     = XLSX.utils.sheet_to_json(workbook.Sheets['PythonData']);
  const row      = rows.find(r => r.TestCase === rowKey);

  if (!row) {
    throw new Error(
      'Python Excel key not found: ' + rowKey +
      '. Available: ' + rows.map(r => r.TestCase).join(', ')
    );
  }

  return {
    code:           String(row.Code           || ''),
    expectedOutput: String(row.ExpectedOutput || ''),
  };
}

module.exports = { getPythonData };