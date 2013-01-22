# templatingLanguage

A simple templating language written as part of a tutorial on JavaScript.

```javascript
var parse = require('templatingLanguage');
var template = parse('hello {{ world }}');
var context = {world: '?'};

console.log(template(context));  // === 'hello ?'
```


## API

#### parse = require('templatingLanguage')  -> function(str)

returns a function that accepts a string to parse it into a templating function.

#### parse(str)  -> function(context)

returns a function that accepts context to render a string.

## LICENSE 

MIT
