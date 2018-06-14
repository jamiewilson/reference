const setHeight = () => {
  document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.scrollHeight
  })
}
