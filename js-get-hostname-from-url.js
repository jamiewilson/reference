/**
 * Get hostname from url.
 * @param {string} url
 * @returns {string}
 */
const host = (url) => {
  const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
  const parts = host.split('.').slice(-3)
  if (parts[0] === 'www') parts.shift()
  return parts.join('.')
}
