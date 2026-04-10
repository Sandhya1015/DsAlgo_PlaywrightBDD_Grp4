// testdata/createQueueExcel.js
// Run ONCE: node testdata/createQueueExcel.js

const XLSX = require('xlsx');
const path = require('path');

const queueData = [

  //  Implementation of Queue in Python 
  {
    TestCase:       'queue_python_valid',
    Code:           'print("Hello")',
    ExpectedOutput: 'Hello',
    Description:    'Valid code prints Hello'
  },
  {
    TestCase:       'queue_python_invalid',
    Code:           'print(Hello")',
    ExpectedOutput: 'error',
    Description:    'Invalid code missing opening quote'
  },
  {
    TestCase:       'queue_python_empty',
    Code:           " '",
    ExpectedOutput: 'alertmessage',
    Description:    'Empty/junk code triggers alert'
  },

  //  Implementation using collections.deque 
  {
    TestCase:       'queue_deque_valid',
    Code:           'print("Hello")',
    ExpectedOutput: 'Hello',
    Description:    'Valid code prints Hello'
  },
  {
    TestCase:       'queue_deque_invalid',
    Code:           'print(Hello")',
    ExpectedOutput: 'error',
    Description:    'Invalid code missing opening quote'
  },
  {
    TestCase:       'queue_deque_empty',
    Code:           " '",
    ExpectedOutput: 'alertmessage',
    Description:    'Empty/junk code triggers alert'
  },

  //  Implementation using array 
  {
    TestCase:       'queue_array_valid',
    Code:           'print("Hello")',
    ExpectedOutput: 'Hello',
    Description:    'Valid code prints Hello'
  },
  {
    TestCase:       'queue_array_invalid',
    Code:           'print(Hello")',
    ExpectedOutput: 'error',
    Description:    'Invalid code missing opening quote'
  },
  {
    TestCase:       'queue_array_empty',
    Code:           " '",
    ExpectedOutput: 'alertmessage',
    Description:    'Empty/junk code triggers alert'
  },

  //  Queue Operations 
  {
    TestCase:       'queue_ops_valid',
    Code:           'print("Hello")',
    ExpectedOutput: 'Hello',
    Description:    'Valid code prints Hello'
  },
  {
    TestCase:       'queue_ops_invalid',
    Code:           'print(Hello")',
    ExpectedOutput: 'error',
    Description:    'Invalid code missing opening quote'
  },
  {
    TestCase:       'queue_ops_empty',
    Code:           " '",
    ExpectedOutput: 'alertmessage',
    Description:    'Empty/junk code triggers alert'
  },
];

const workbook  = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(queueData);

worksheet['!cols'] = [
  { wch: 28 },
  { wch: 40 },
  { wch: 20 },
  { wch: 40 },
];

XLSX.utils.book_append_sheet(workbook, worksheet, 'QueueData');
XLSX.writeFile(workbook, path.join(__dirname, 'queueData.xlsx'));

console.log('queueData.xlsx created successfully!');
console.log('Total rows: ' + queueData.length);
queueData.forEach(row => console.log('  - ' + row.TestCase));