# arraify [![](https://travis-ci.com/Gyumeijie/arrify.svg?branch=master)](https://travis-ci.com/Gyumeijie/arrify)

> Convert a value to an array

## Install

```
$ npm install arraify
```

## Usage

```js
const arrify = require('arraify');

const obj = {
  0: 'zero',
  1: 'one',
  length: 2,
};
arrify(obj);
// ['zero', 'one']

arrify(1, 2, 3);
// [1, 2, 3]

arrify('string');
// ['s', 't', 'r', 'i', 'n', 'g']

arrify.config = { splitString: false };
arrify('string');
// ['sting']

arrify([])
// []

arrify()
// []

arrify(null)
// []

arrify(undefined)
// []
```

## License

MIT © [Gyumeijie](https://github.com/Gyumeijie)
