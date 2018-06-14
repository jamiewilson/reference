window.addEventListener('DOMContentLoaded', () => {
  const sass = new Sass()
  const editor = document.querySelector('.editor')
  const style = document.querySelector('.style')
  const errorMsg = document.querySelector('.error')

  editor.addEventListener('keyup', _.debounce(updateStyle, 750))
  updateStyle()

  function updateStyle() {
    let scss = `.output { ${editor.value} }`
    sass.compile(scss, css => {
      if (css.status === 0) {
        errorMsg.textContent = ''
        style.textContent = css.text
      } else {
        errorMsg.textContent = css.formatted
      }
    })
  }

  // Make tab key work in textarea
  editor.addEventListener('keydown', function(e) {
    if (e.keyCode === 9) {
      e.preventDefault()
      var start = this.selectionStart
      var end = this.selectionEnd
      var target = e.target
      var value = target.value
      // text before cursor + tab + text after cursor
      target.value = value.substring(0, start) + '\t' + value.substring(end)
      // put cursor at right position again (add one for the tab)
      this.selectionStart = this.selectionEnd = start + 1
    }
  }, false)
})
