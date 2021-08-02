# 0xVentures Monorepository

Monoreposity collects products under 0xVentures umbrella.

### Web

Web app built with Typescript and Next.js.
Web app is a private place for members to share alpha and tools that help navigate the markets.

### Server

Node.js server serving as authentication layer and providing best possible tooling in crypto.

## Requirements

To run this stack locally you would need:

- nodejs
- yarn

## Installation

After cloning the repo run `yarn install` in the main directory.

Next please follow server / web detailed instruction depending on what you're going to work on.
Each of the packages requires delicate touches in `.env` file providing access to database.

After that it's pretty much

```
// running server
cd packages/server
yarn start

// running web app
cd packages/web
yarn dev
```
