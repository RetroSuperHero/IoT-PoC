const path = require('path');
const fs = require('fs');
const solc = require('solc');

const carPoolPath = path.resolve(__dirname, "contracts", "CarPool.sol");
const source = fs.readFileSync(carPoolPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':CarPool'];