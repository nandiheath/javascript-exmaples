# 04_html_with_npm_webpack

## Build

```bash
# install dependencies
npm i

# build using babel
npm run build

# build using webpack
npm run webpack
```

## Run

```bash
# use whatever http server to serve
http-server .
```

There is syntax error when loading the script transpiled by babel
[http://localhost:8080/dist.html](http://localhost:8080/dist.html)

And no error when loading the bundled scripts using webpack + babel
[http://localhost:8080/bundle.html](http://localhost:8080/bundle.html)