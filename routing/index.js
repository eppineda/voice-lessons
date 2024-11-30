import { all } from '../controllers/courses.js'

const route = app => {
	app.get('courses.xml', async ctx => {
		await ctx.sendFile(ctx.home.child('public/data/courses.xml'))
	})
	app.get('raw.xml', async ctx => {
		await ctx.sendFile(ctx.home.child('public/data/raw.xml'))
	})
	app.get('courses.xsl', async ctx => {
		await ctx.sendFile(ctx.home.child('public/data/courses.xsl'))
	})
	app.post('/register/:id', async ctx => { // send all responses for this event
		await ctx.sendFile(ctx.home.child('public', 'not-implemented.html')) // default response for root aka public/
	})
	app.delete('/register/:id', async ctx => { // send all responses for this event
		await ctx.sendFile(ctx.home.child('public', 'not-implemented.html')) // default response for root aka public/
	})
	app.get('/all', all)

}

export default route
