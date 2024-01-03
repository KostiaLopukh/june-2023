// MODULES
// const { help } = require('./helpers/helper');
// help();

// GLOBAL VARIABLES
// console.log(__dirname, 'dirname');
// console.log(__filename, 'filename');
// console.log(process.cwd(), 'process.cwd');


// PATH
const path = require('path');
// const joinedPath = path.join(__dirname, 'helper', 'helper.js');
// const resolvedPath = path.resolve('helper', 'helper.js');
// const normalizedPath = path.normalize('/foo/bar//////baz/asdf/quux/..');

// FS
const fs = require('fs');

const pathToFile = path.join(__dirname, 'data', 'text.txt');
const pathToCreatedFile = path.join(__dirname, 'data', 'text2.txt');

// fs.readFile(pathToFile, (err, data)=>{
//   if (err) throw new Error();
//   console.log(data.toString());
// })

// fs.appendFile(pathToFile, 'hello okten', (err)=>{
//   if (err) throw new Error();
// })

// fs.writeFile(pathToCreatedFile, 'hello recently created file', (err)=>{
//   if (err) throw new Error();
// })

// fs.truncate(pathToCreatedFile, (err)=>{
//   if (err) throw new Error();
// })

// fs.unlink(pathToCreatedFile, (err)=>{
//    if (err) throw new Error();
//  })

// fs.readdir(path.join(__dirname, 'data'), (err, files)=>{
//   if (err) throw new Error()
//   console.log(files)
// })

// fs.mkdir(path.join(__dirname, 'data3'), (err)=>{
//   if (err) throw new Error()
// })

// fs.rmdir(path.join(__dirname, 'data3'), (err)=>{
//   if (err) throw new Error()
// })

// fs.unlink(path.join(__dirname, 'main.js'), (err)=>{
//   if (err) {
//     throw new Error()
//   }})

const os = require('os');

console.log(os.type())
