# karma-json2js-preprocessor

a carbon copy of [karma-html2js-preprocessor](https://github.com/karma-runner/karma-html2js-preprocessor). Only difference is the name, and the fact that it stores files in window.\__json__ instead of window.\__html__

If you need this just use html2js instead:

```js
module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
        '**/*.js',
        '**/*.html',
        '**/*.json',
        '**/*.spec.js'
    ],
    plugins: [
        'karma-html2js-preprocessor'
    ]
    preprocessors: {
        '**/*.html': ['html2js'],
        '**/*.json': ['html2js']
    }
  });
};
```

Then do what you need with the json or html:

```js
var exampleJson = __html__['example.json'];
var jsonObj = JSON.parse(exampleJson);
var exampleHtml = __html__['example.html'];
document.body.innerHTML = exampleHtml;
```

### Related:

* https://github.com/karma-runner/karma/issues/858
* http://stackoverflow.com/questions/20690005/why-is-karma-refusing-to-serve-my-json-fixture-which-id-like-to-use-in-my-jasm

