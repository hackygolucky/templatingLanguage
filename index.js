module.exports = template
var lookup = require('dotpathlookup')
var Parser = require('parser')


function template(input) {
	var regex = /\{\{\s*([\w\d\-\.]*)\s*\}\}/g;

	return function renderedString(context) {
		return input.replace(regex, function(match, capture) {
			return lookup(capture)(context);
		});
	}
}


