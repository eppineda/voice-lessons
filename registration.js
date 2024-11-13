import console from './my-console.js'

const open = () => {
	console.log('class registration opened')
}

const isOpen = () => true

const isClosed = () => false

const close = () => {
	console.log('registration closed')
}

const addObserver = who => new Promise((resolve, reject) => {
	if (!who) reject(`invalid observer: ${ JSON.stringify(who) }`)
})

const registration = { open, isOpen, close, isClosed, addObserver }
export default registration
