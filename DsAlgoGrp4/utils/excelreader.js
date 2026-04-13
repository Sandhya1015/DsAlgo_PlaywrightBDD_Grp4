const XLSX = require('xlsx'); 
function getTestData(sheetName) { 
const workbook = XLSX.readFile('test-data/loginData.xlsx'); 
const sheet = workbook.Sheets[sheetName]; 

return XLSX.utils.sheet_to_json(sheet); } 

function getDataByType(sheetName, type) {
  const data = getTestData(sheetName);
     console.log("ALL DATA:", data); 
  return data.find(
  r => r.type?.trim().toLowerCase() === type.trim().toLowerCase()
);
}
 
module.exports = { getDataByType };