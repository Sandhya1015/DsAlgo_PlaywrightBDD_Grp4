// BeforeAll → runs once → "Framework ready"
//     ↓
// Before   → runs before EACH scenario → "Starting: scenario name"
//     ↓
//   Scenario runs...
//     ↓
// After    → runs after EACH scenario → "PASSED/FAILED: scenario name"
//     ↓
// AfterAll → runs once → "All tests completed"

// features/hooks/hooks.js
const { Before, After, BeforeAll, AfterAll } = require('playwright-bdd');

BeforeAll(async function () {
  console.log('Framework is ready');
});

AfterAll(async function () {
  console.log('All tests completed');
});

Before(async function ({ }, scenario) {
  console.log('Starting: ' + scenario.pickle.name);
});

After(async function ({ }, scenario) {
  const status = scenario.result?.status;
  if (status === 'FAILED') {
    console.log('FAILED: ' + scenario.pickle.name);
  } else {
    console.log('PASSED: ' + scenario.pickle.name);
  }
});
