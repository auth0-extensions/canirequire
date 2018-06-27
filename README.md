# [Can I require](https://auth0-extensions.github.io/canirequire/)

Can I require is a simple application running on [Webtask](https://webtask.io) that lists and allows users to search the modules they can require on Auth0 Extensibility points (Rules, Custom DB scripts, and Custom Social Connections).

The Node version dropdown allows you to select the same runtime version your Auth0 Extensbility code is running on and discover which modules are available for that specific version.

A runtime can also be pre-selected by passing it as a query parameter, like so:

```
https://auth0-extensions.github.io/canirequire/?node_version=8
```

Where `node_version` can be either `4` or `8` (the default).

> **Please note that [Node.js v4 is now officilly out of LTS](https://github.com/nodejs/Release#release-schedule) and we strongly encourage you to migrate to Node 8 as soon as possible.** 
>
> You can check out our [Node 4 to 8 Migration Guide](https://auth0.com/docs/migrations/guides/extensibility-node8) and reach out to us on [our community](https://community.auth0.com/) if you have any questions.

## Development Instructions

1. ```npm i```
2. ```npm run dev```

## Build Instructions

1. ```npm i```
2. ```gulp build```
