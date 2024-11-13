import 'dotenv/config'
import mojo from '@mojojs/core'
import console from './my-console.js'
import server from './server.js'

server.start(mojo).then(({ app }) => {
	app.start()
	/*
	registration.open()

	while (registration.isOpen()) {
	}

	registration.close()
	*/
}).catch(msg => {
	console.error(msg)
})
