# karma-json2js-preprocessor

> Preprocessor for converting JSON files into JS strings.

## Installation

The easiest way is to keep `karma-json2js-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-json2js-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-json2js-preprocessor --save-dev
```

## Configuration
Following code shows the default configuration...
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.json': ['json2js']
    },

    files: [
      '*.js',
      '*.json'
    ]
  });
};
```

## How does it work ?

This preprocessor converts JSON files into JS strings and publishes them in the global `window.__json__`, so that you can use these for testing mock json requests and responses.

For instance this `example.json`...
```js
{
    "name": "foo",
    "friends": [
        {
            "name": "bar"
        }
    ]
}
```
... will be served as `example.json.js`:
```js
window.__json__ = window.__json__ || {};
window.__json__['example.json'] = '{"name":"foo","friends":[{"name":"bar"}]}';
```

See the [end2end test](https://github.com/kenglxn/karma-json2js-preprocessor/tree/master/e2e-test) for a complete example.

