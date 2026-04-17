// const XLSX = require('xlsx');

// const FILE_PATH = 'E:\\PlayWright\\TestData\\loginData.xlsx';

// function getTestData(sheetName) {
//   const workbook = XLSX.readFile(FILE_PATH);
//   const sheet    = workbook.Sheets[sheetName];
//   return XLSX.utils.sheet_to_json(sheet);
// }



// function getDataByType(sheetName, type) {
//   const data = getTestData(sheetName);
//   console.log("ALL DATA:", data);
//   return data.find(
//     r => r.type?.trim().toLowerCase() === type.trim().toLowerCase()
//   );
// }

// module.exports = { getDataByType };





// const XLSX = require('xlsx');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config({
//   path: path.resolve(process.cwd(), '.env'),
// });

// function getTestData(sheetName) {
//   const filePath = process.env.EXCEL_PATH;
//   console.log("ENV CHECK:", filePath);

//   if (!filePath) {
//     throw new Error(":x: EXCEL_PATH not set in .env file");
//   }

//   if (!fs.existsSync(filePath)) {
//     throw new Error(`:x: Excel file not found at: ${filePath}`);
//   }

//   const workbook = XLSX.readFile(filePath);
//   const sheet = workbook.Sheets[sheetName];

//   return XLSX.utils.sheet_to_json(sheet);
// }

// function getDataByType(sheetName, type) {
//   const data = getTestData(sheetName);

//   console.log("ALL DATA:", data);

//   return data.find(
//     r => r.type?.trim().toLowerCase() === type.trim().toLowerCase()
//   );
// }

// module.exports = { getDataByType };

const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');
require('dotenv').config({
path: path.resolve(process.cwd(), '.env'),
});

function getTestData(sheetName) {
const filePath = process.env.EXCEL_PATH;
console.log("ENV CHECK:", filePath);

if (!filePath) {
throw new Error(" EXCEL_PATH not set in .env file");
}

if (!fs.existsSync(filePath)) {
throw new Error(` Excel file not found at: ${filePath}`);
}

const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[sheetName];

return XLSX.utils.sheet_to_json(sheet);
}

function getDataByType(sheetName, type) {
const data = getTestData(sheetName);

console.log("ALL DATA:", data);

return data.find(
r => r.type?.trim().toLowerCase() === type.trim().toLowerCase()
);
}

module.exports = { getDataByType };



