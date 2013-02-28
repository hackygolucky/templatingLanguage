module.exports = template
var lookup = require('dotpathlookup')
var Parser = require('parser')


function template(input) {
	var items = [];
	var regex = /\{\{\s*([\w\d\-\.]*)\s*\}\}/;
	// [whole match, group n, index: where found it]
	var match;

	while (match = regex.exec(input)) {
		items.push(raw(input.slice(0, match.index)));
		items.push(lookup(match[1]));
		input = input.slice(match.index + match[0].length)
		//regex.lastIndex = 0;
	}
	items.push(raw(input))

	return function renderedString(context) {
		var results = [];
		for (i = 0; i < items.length; ++i) {
			var item = items[i];
			results.push(item(context))
		}
		return results.join("")
	}
}

function raw(str) {
	return function(context) {
		return str
	}
}


