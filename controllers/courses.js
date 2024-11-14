import console from '../my-console.js'
import fetch from 'node-fetch'
import convert from 'xml-js'
import beautify from 'json-beautify'

const all = async ctx => {
	const request = 'http://0.0.0.0:3000/raw.xml'
	let json

	fetch(request)
		.then(response => response.text())
		.then(str => {
			json = JSON.parse(convert.xml2json(str))
		})
		.then(() => {
			console.debug(beautify(JSON.stringify(json)))
		})
        
	const content ='<tr><td>1</td><td>2</td><td>3</td></tr>'
	ctx.res.status(200).send(content)
}

export { all }
