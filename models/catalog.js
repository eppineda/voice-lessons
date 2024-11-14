const catalog = json => json.elements // root
const courses = json => json.elements[0].elements
const course = (json, idx) => courses(json)[idx]
const fields = (json, idx) => course(json, idx).elements
const field = (json, idx, idx2) => fields(json, idx)[idx2].elements[0].text
const id = (json, idx) => course(json, idx).elements[0].elements[0].text
const title = (json, idx) => course(json, idx).elements[1].elements[0].text
const description = (json, idx) => course(json, idx).elements[1].elements[0].text
const parser = { catalog, courses, course, fields, field, id, title, description }; console.log(parser.courses)


export default parser
