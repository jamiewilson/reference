const $ = (selector, target = document) => target.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
const $on = (type, target, callback) => target.addEventListener(type, callback)

$on('load', window, () => {
	$$('link[rel=import]').forEach(href => {
		document.head.appendChild($('style', href.import))
		document.body.appendChild($('template', href.import).content)
	})
})
