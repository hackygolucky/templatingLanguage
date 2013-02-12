var assert = require('assert')


var your_function = require('./index');

var tpl = your_function("hello {{ world }} how\n is your {{ weekday }} going?")
var result = tpl({
  world: 'dude'
, weekday: 'tuesday'
})  // == "hello dude how is your tuesday going?"

assert.equal( result, "hello dude how\n is your tuesday going?")



var tpl = your_function("i have five cherr{{ plural }}" )
var result = tpl({
  plural: "ies"
})  // == "i have five cherries"

assert.equal( result, "i have five cherries", "These should match")


var tpl = your_function("{{ check.it.out }}" )
var result = tpl({
  check:{
  	it:{
  		out: "woop woop"
  	}
  }
})  // == "woop woop"

assert.equal( result, "woop woop")