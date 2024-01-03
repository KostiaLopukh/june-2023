function help() {
  console.log('I am helping you');
  console.log(__dirname, 'dirname');
  console.log(__filename, 'filename');
  console.log(process.cwd(), 'process.cwd');

}

module.exports = { help }
