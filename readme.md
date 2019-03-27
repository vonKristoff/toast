# toast

This is an empty app shell boilerplate, geared up for Vue. 
I have a master boilerplate generator that can generate in a similar mannor for most of my standard project types, such as `React` or `Express`. They also pull in my CSS lib repo that kicks off my classic CSS structure.. which is using the much disliked `Stylus`. This can be switched out at my top level generator level anyhow.

JS code is written in `ES6`, compiled to ES5 using `Buble`, bundled by `Rollup` which also minifies, lints and whatever else the requirements may be. See `rollup.config.js`

My HTML is compiled by `pug` (or Jade, as it was in the past) .. I use the `NPM` scripts to handle processing these templates and then being able to merge them into my Vue components.

The `NPM` scripts handle all the watchers and live reloads, as well as env variables and 'above the fold' CSS to HTML injection etc.

### Development
App Entry `js/main` 

    npm start

---

### notes
* `async.js` - allows css scripts to be loaded in async via the `link rel=preload as=style`
* `ENV variables` are available, see `npm run production` and in `js/main.js`. Also `rollup.config.js` detects `ENV` and `uglifies` where applicable.
* [eslint](http://eslint.org/docs/user-guide/configuring) check the manual for any issues with ES6

---
