#!/usr/bin/env node
// !! require nodejs 8+


const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const filename = 'counter.txt';


async function main() {
  const stat = await fs.statAsync(filename);
  if (stat.isFile()) {
    const content = await fs.readFileAsync(filename);
    let count = parseInt(content.toString());
    console.log('The new value is :' + count++);
    await fs.writeFileAsync(filename, count);
  }
}

main().then();

