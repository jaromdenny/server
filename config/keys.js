//keys.js - determine production or dev environment for key

if (process.env.NODE_ENV === 'production') {
	//in Prod
	module.exports = require('./prod');
} else {
	//in Dev
	module.exports = require('./dev');
}
