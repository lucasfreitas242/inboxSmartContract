const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxpath = path.resolve(__dirname, 'Contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxpath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Inbox.sol'
  ].Inbox;
