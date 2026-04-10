// testdata/createPythonExcel.js
// // Run ONCE: node testdata/createPythonExcel.js

// const XLSX = require('xlsx');
// const path = require('path');

// const pythonData = [
//    Arrays in Python 
//   {
//     TestCase:       'valid_array_code',
//     Code:           'grocery = ["apple", "mango", "grapes"]\nprint(grocery)',
//     ExpectedOutput: "['apple', 'mango', 'grapes']",
//     Description:    'Valid array print code'
//   },
//   {
//     TestCase:       'array_wrong_syntax',
//     Code:           'grocery = ["apple", "mango"\nprint(grocery)',
//     ExpectedOutput: 'SyntaxError',
//     Description:    'Wrong syntax missing bracket'
//   },

//   // ── Arrays Using List 
//   {
//     TestCase:       'list_insert_code',
//     Code:           'a = [1, 2, 3]\na.insert(1, 10)\nprint(a)',
//     ExpectedOutput: '[1, 10, 2, 3]',
//     Description:    'List insert operation'
//   },
//   {
//     TestCase:       'list_wrong_syntax',
//     Code:           'grocery = []\nsysout.ptinln()',
//     ExpectedOutput: 'NameError',
//     Description:    'Wrong syntax NameError'
//   },

//    Basic Operations 
//   {
//     TestCase:       'basicops_pop_code',
//     Code:           'a = [1, 2, 3, 4, 5]\na.pop()\nprint(a)',
//     ExpectedOutput: '[1, 2, 3, 4]',
//     Description:    'Basic pop operation'
//   },
//   {
//     TestCase:       'basicops_wrong_syntax',
//     Code:           'list_name.insert(index, e)\ngrocery.insert(2, "carrots")',
//     ExpectedOutput: 'NameError',
//     Description:    'Basic ops wrong syntax'
//   },

//   //  Practice Questions 
//   {
//     TestCase:       'q1_wrong_submit',
//     Code:           'def Search(list_input, value):\n  if value in list_input:\n    print("Found")',
//     ExpectedOutput: 'Error',
//     Description:    'Q1 wrong submission'
//   },
//   {
//     TestCase:       'q1_correct_submit',
//     Code:           'def Search(list_input, value):\n  if value in list_input:\n    return True\n  return False',
//     ExpectedOutput: 'Correct',
//     Description:    'Q1 correct submission'
//   },
//   {
//     TestCase:       'q4_wrong_syntax',
//     Code:           'def sortedSquares(nums):',
//     ExpectedOutput: 'SyntaxError',
//     Description:    'Q4 wrong syntax'
//   },
// ];

// const workbook  = XLSX.utils.book_new();
// const worksheet = XLSX.utils.json_to_sheet(pythonData);

// worksheet['!cols'] = [
//   { wch: 25 },
//   { wch: 55 },
//   { wch: 30 },
//   { wch: 45 },
// ];

// XLSX.utils.book_append_sheet(workbook, worksheet, 'PythonData');
// XLSX.writeFile(workbook, path.join(__dirname, 'pythonData.xlsx'));

// console.log('pythonData.xlsx created successfully!');
// pythonData.forEach(row => console.log('  - ' + row.TestCase));




// testdata/createPythonExcel.js
// Run ONCE: node testdata/createPythonExcel.js

const XLSX = require('xlsx');
const path = require('path');

const pythonData = [

  // Arrays in Python 
  {
    TestCase:       'valid_array_code',
    Code:           'grocery = ["apple", "mango", "grapes"]\nprint(grocery)',
    ExpectedOutput: "['apple', 'mango', 'grapes']",
    Description:    'Valid array print code'
  },
  {
    TestCase:       'array_wrong_syntax',
    Code:           'grocery = ["apple", "mango"\nprint(grocery)',
    ExpectedOutput: 'SyntaxError',
    Description:    'Wrong syntax missing bracket'
  },
  {
    TestCase:       'array_creation',
    Code:           'import array\narr = array.array("i", [1, 2, 3])\nprint(arr)',
    ExpectedOutput: 'array',
    Description:    'Array creation using array module'
  },
  {
    TestCase:       'array_insertion',
    Code:           'grocery = ["apple", "mango", "grapes"]\ngrocery.insert(1, "banana")\nprint(grocery)',
    ExpectedOutput: "['apple', 'banana', 'mango', 'grapes']",
    Description:    'Array insertion operation'
  },
  {
    TestCase:       'array_deletion',
    Code:           'grocery = ["apple", "mango", "grapes"]\ngrocery.pop(1)\nprint(grocery)',
    ExpectedOutput: "['apple', 'grapes']",
    Description:    'Array deletion operation'
  },
  {
    TestCase:       'array_search',
    Code:           'grocery = ["apple", "mango", "grapes"]\nprint(grocery.index("mango"))',
    ExpectedOutput: '1',
    Description:    'Array search operation'
  },
  {
    TestCase:       'array_update',
    Code:           'grocery = ["apple", "mango", "grapes"]\ngrocery[1] = "banana"\nprint(grocery)',
    ExpectedOutput: "['apple', 'banana', 'grapes']",
    Description:    'Array update operation'
  },

  // Arrays Using List 
  {
    TestCase:       'list_insert_code',
    Code:           'a = [1, 2, 3]\na.insert(1, 10)\nprint(a)',
    ExpectedOutput: '[1, 10, 2, 3]',
    Description:    'List insert operation'
  },
  {
    TestCase:       'list_wrong_syntax',
    Code:           'grocery = []\nsysout.ptinln()',
    ExpectedOutput: 'NameError',
    Description:    'Wrong syntax NameError'
  },

  // Basic Operations 
  {
    TestCase:       'basicops_pop_code',
    Code:           'a = [1, 2, 3, 4, 5]\na.pop()\nprint(a)',
    ExpectedOutput: '[1, 2, 3, 4]',
    Description:    'Basic pop operation'
  },
  {
    TestCase:       'basicops_wrong_syntax',
    Code:           'list_name.insert(index, e)\ngrocery.insert(2, "carrots")',
    ExpectedOutput: 'NameError',
    Description:    'Basic ops wrong syntax'
  },

  // Applications of Array 
  {
    TestCase:       'applications_wrong_syntax',
    Code:           'temperatures = []\ntemperatures.appnd(36.5)',
    ExpectedOutput: 'AttributeError',
    Description:    'Applications wrong syntax'
  },

  // Practice Questions
  {
    TestCase:       'q1_wrong_submit',
    Code:           'def Search(list_input, value):\n  if value in list_input:\n    print("Found")',
    ExpectedOutput: 'Error',
    Description:    'Q1 wrong submission'
  },
  {
    TestCase:       'q1_correct_submit',
    Code:           'def Search(list_input, value):\n  if value in list_input:\n    return True\n  return False',
    ExpectedOutput: 'Correct',
    Description:    'Q1 correct submission'
  },
  {
    TestCase:       'q1_wrong_syntax',
    Code:           'def Search(list_input value):\n  return True',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q1 wrong syntax'
  },
  {
    TestCase:       'q2_wrong_syntax',
    Code:           'def findMaxConsecutiveOnes(nums)\n  return 1',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q2 wrong syntax'
  },
  {
    TestCase:       'q2_wrong_submit',
    Code:           'def findMaxConsecutiveOnes(nums):\n  print("hello")',
    ExpectedOutput: 'Error',
    Description:    'Q2 wrong submission'
  },
  {
    TestCase:       'q3_wrong_syntax',
    Code:           'def findNumbers(nums)\n  return 1',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q3 wrong syntax'
  },
  {
    TestCase:       'q3_wrong_submit',
    Code:           'def findNumbers(nums):\n  print("hello")',
    ExpectedOutput: 'Error',
    Description:    'Q3 wrong submission'
  },
  {
    TestCase:       'q4_wrong_syntax',
    Code:           'def sortedSquares(nums):',
    ExpectedOutput: 'SyntaxError',
    Description:    'Q4 wrong syntax'
  },
  {
    TestCase:       'q4_wrong_submit',
    Code:           'def sortedSquares(nums):\n  print("hello")',
    ExpectedOutput: 'Error',
    Description:    'Q4 wrong submission'
  },
];

const workbook  = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(pythonData);

worksheet['!cols'] = [
  { wch: 28 },
  { wch: 60 },
  { wch: 35 },
  { wch: 45 },
];

XLSX.utils.book_append_sheet(workbook, worksheet, 'PythonData');
XLSX.writeFile(workbook, path.join(__dirname, 'pythonData.xlsx'));

console.log('pythonData.xlsx created successfully!');
console.log('Total rows: ' + pythonData.length);
pythonData.forEach(row => console.log('  - ' + row.TestCase));