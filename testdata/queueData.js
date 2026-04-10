// testdata/queueData.js
// Reads Queue test data from queueData.xlsx

const XLSX = require('xlsx');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'queueData.xlsx');

function getQueueData(rowKey) {
  const workbook = XLSX.readFile(FILE_PATH);
  const rows     = XLSX.utils.sheet_to_json(workbook.Sheets['QueueData']);
  const row      = rows.find(r => r.TestCase === rowKey);

  if (!row) {
    throw new Error(
      'Queue Excel key not found: ' + rowKey +
      '. Available: ' + rows.map(r => r.TestCase).join(', ')
    );
  }

  return {
    code:           String(row.Code           || ''),
    expectedOutput: String(row.ExpectedOutput || ''),
  };
}

module.exports = { getQueueData };