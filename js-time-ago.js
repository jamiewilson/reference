/**
 * Return time elapsed since a given UNIX Epoch time.
 * @param {number} time
 * @returns {string}
 */
const timeAgo = (time) => {
  const between = Date.now() / 1000 - Number(time)
  return between < 3600
    ? pluralize(~~(between / 60), ' minute')
    : between < 86400
    ? pluralize(~~(between / 3600), ' hour')
    : pluralize(~~(between / 86400), ' day')
}

const pluralize = (time, label) => {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}
