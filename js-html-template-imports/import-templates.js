window.addEventListener('load', () => {
	const imports = document.querySelectorAll('link[rel=import]')
	imports.forEach(file => {
		const style = file.import.querySelector('style')
		document.head.appendChild(style)

		const template = file.import.querySelector('template').content
		document.body.appendChild(template)
	})
})
