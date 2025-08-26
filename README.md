# [Can I require](https://auth0-extensions.github.io/canirequire/)

Can I require is a simple application running on [Webtask](https://webtask.io) that lists and allows users to search the modules they can require on Auth0 Extensibility points (Rules, Custom DB scripts, and Custom Social Connections).

The Node version dropdown allows you to select the same runtime version your Auth0 Extensbility code is running on and discover which modules are available for that specific version.

A runtime can also be pre-selected by passing it as a query parameter, like so:

```
https://auth0-extensions.github.io/canirequire/?node_version=22
```

Where `node_version` can be either `18` or `22` (the default).

> **Please note that only Node.js 18 and 22 are currently supported. We strongly encourage you to use Node.js 22 for the latest features and best performance.**

## Development Instructions

1. ```npm i```
2. ```npm run dev```

## Build Instructions

1. ```npm i```
2. ```gulp build```
