const fs = require('node:fs/promises');
const path = require('node:path');

const pathToFile = path.join(process.cwd(), 'db.json');

const read = async () => {
    const json = await fs.readFile(pathToFile, {encoding: 'utf-8'});
    return JSON.parse(json);
}

const write = async (users) => {
    await fs.writeFile(pathToFile, JSON.stringify(users));
}

module.exports = {read, write}
