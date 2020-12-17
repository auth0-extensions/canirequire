# [Can I require](https://auth0-extensions.github.io/canirequire/)

Can I require is a simple application running on [Webtask](https://webtask.io) that lists and allows users to search the modules they can require on Auth0 Extensibility points (Rules, Custom DB scripts, and Custom Social Connections).

The Node version dropdown allows you to select the same runtime version your Auth0 Extensbility code is running on and discover which modules are available for that specific version.

A runtime can also be pre-selected by passing it as a query parameter, like so:

```
https://auth0-extensions.github.io/canirequire/?node_version=12
```

Where `node_version` can be either `8` or `12` (the default).

> **Please note that [Node.js v8 is now officially out of LTS](https://github.com/nodejs/Release#release-schedule) and we strongly encourage you to migrate to Node 12 as soon as possible.**
> **We cannot support increased functionality on Node 8. If you are looking to update your code or add new packages, you need to reference Node 12 packages which we support.**

## New Package Requests

Can't find the module you want? You can [request it here](https://github.com/auth0-extensions/canirequire/issues/new).


## Development Instructions

1. ```npm i```
2. ```npm run dev```

## Build Instructions

1. ```npm i```
2. ```gulp build```
