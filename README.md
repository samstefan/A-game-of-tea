# A Game of Tea

This repo contains the website and API for 'A Game of Tea'

## Requirements

- node.js `node.js >= 0.8.0
- gulp.js ^3.8.0`
- A pusher account

### Set-up

First you need to set up the property files for the website and API. Copy the example file and fill out as appropriate:
```
$ cp example-properties.js ./api/properties.js
$ cp example-global-properties.js global-properties.js
````

Install the API dependences:
```
$ cd api
$ npm install
```

Install the website build dependences:
```
$ cd website
$ npm install gulp -g
$ npm install
```

### Running the API

```
$ cd api
$ npm start
```

### Running the website

```
$ cd website
$ npm start
```