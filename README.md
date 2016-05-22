# Akyuu Body Parser

Body parser plugin for Akyuu.js.

> It's based on [body-parser](https://www.npmjs.com/package/body-parser) of Expressjs.

## Installation

```sh
$ npm install --save -d akyuu-body-parser
```

## Usage

Install this package and add configuration section below to your bodyParser plugins section of configuration in Akyuu.js.

```js
{
    enabled: true,

    urlencoded: {
        // options refer to
        // https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions
        limit: "100kb"
    },

    json: true,  // use true to support non-option

    text: false, // false or undefined to disable this method,

    raw: {
        type: "application/octet-stream"
    }
}
```

> You can refer to https://www.npmjs.com/package/body-parser#api to get all supported format.
