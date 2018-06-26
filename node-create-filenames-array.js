// Make a list of pages from file names to use in navigation
export const makeArrayOfFilenames = (dir) => {
  var filenames = []
  fs.readdirSync(dir)
    .filter(file => (!~file.indexOf('index.html')))
    .map(file => file.split('.')[0])
    .forEach(file => pagesArray.push(file))
  return filenames
}
