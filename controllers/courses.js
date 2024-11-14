import console from '../my-console.js'
import fetch from 'node-fetch'
import convert from 'xml-js'
import beautify from 'json-beautify'
import parser from '../models/catalog.js'

const all = async ctx => {
	const request = 'http://0.0.0.0:3000/raw.xml'
	let json

	fetch(request)
		.then(response => response.text())
		.then(str => {
			json = JSON.parse(convert.xml2json(str))
			const courses = parser.courses(json)
			const first = parser.course(json, 0)
			let content = ''

// header
			let fieldNames = []
			content += '<tr bgcolor="#9acd32">'
			first.elements.forEach(f => {
				const fieldName = f.name
				fieldNames.push(fieldName)
				content += `<th style="text-align:left">${ fieldName }</th>`
			})
			content += '</tr>'

// data
			courses.forEach((c, idx) => {
				content += '<tr>'
				fieldNames.forEach((f, idx2) => {
					content += `<td>${ parser.field(json, idx, idx2) }</td>`
				})
				content += '</tr>'
			})

			ctx.res.status(200).send(content)
		})
		.catch(error => {
			console.error(error)
		})
}

export { all }
