function format(template, args) {
  if (typeof args != 'object') {
    args = [].slice.call(arguments, 1)
  }
  return String(template).replace(/\{(\w+)\}/gi, function(match, $key) {
    return args[$key] || $key
  })
}
export default format
