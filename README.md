# Trello Description Changelog Plugin

[![Build Status](https://travis-ci.org/atixlabs/TrelloDescriptionChangelog.svg?branch=master)](https://travis-ci.org/atixlabs/TrelloDescriptionChangelog)
[![Build status: Windows](https://ci.appveyor.com/api/projects/status/lye06iusdnhnxbgo/branch/master?svg=true)](https://ci.appveyor.com/api/projects/status/lye06iusdnhnxbgo/branch/master)
[![Dependency Status](https://david-dm.org/atixlabs/TrelloDescriptionChangelog.svg)](https://david-dm.org/atixlabs/TrelloDescriptionChangelog)
[![devDependency Status](https://david-dm.org/atixlabs/TrelloDescriptionChangelog/dev-status.svg)](https://david-dm.org/atixlabs/TrelloDescriptionChangelog#info=devDependencies)

## Motivation

- Trello doesn't have an option to show a card description history changelog.
- For fun! (react + redux are awesome)

![Example](https://cloud.githubusercontent.com/assets/3750504/18231231/aedc8a1a-7289-11e6-8914-84ef2434284d.gif)

## TODO

- [x] Catch webservice errors
- [x] Show an indicator when the app is fetching data
- [x] Remove unused code broght by the project the repo was based on
- [x] Fix eslint errors
- [x] Clean package.json
- [x] Update README.md
- [x] e2e Tests
- [ ] app Tests
- [ ] Remove this todo once everything is done :P


## Acknowledgment 

This is based on this great repo [React Chrome Extension Boilerplate](https://github.com/jhen0409/react-chrome-extension-boilerplate.git)

## Features

 - Simple [React](https://github.com/facebook/react)/[Redux](https://github.com/rackt/redux) examples of Chrome Extension Window & Popup & Inject pages
 - Hot reloading React/Redux (Using [Webpack](https://github.com/webpack/webpack) and [React Transform](https://github.com/gaearon/react-transform))
 - Write code with ES2015+ syntax (Using [Babel](https://github.com/babel/babel))
 - E2E tests of Window & Popup & Inject pages (Using [Chrome Driver](https://www.npmjs.com/package/chromedriver), [Selenium Webdriver](https://www.npmjs.com/package/selenium-webdriver))

#### Inject page

The inject script is being run by [chrome/extension/background/inject.js](chrome/extension/background/inject.js). A simple example will be inject bottom of page(`https://github.com/*`) if you visit.

## Installation

```bash
# clone it
$ git clone https://github.com/jhen0409/react-chrome-extension-boilerplate.git

# Install dependencies
$ npm install
```

## Development

* Run script
```bash
# build files to './dev'
# start webpack development server
$ npm run dev
```
* If you're developing Inject page, please allow `https://localhost:3000` connections. (Because `injectpage` injected GitHub (https) pages, so webpack server procotol must be https.)
* [Load unpacked extensions](https://developer.chrome.com/extensions/getstarted#unpacked) with `./dev` folder.

#### React/Redux hot reload

This boilerplate uses `Webpack` and `react-transform`, and use `Redux`. You can hot reload by editing related files of Popup & Window & Inject page.

#### Using Redux DevTools Extension

You can use [redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension) on development mode.

## Build

```bash
# build files to './build'
$ npm run build
```

## Compress

```bash
# compress build folder to {manifest.name}.zip and crx
$ npm run build
$ npm run compress -- [options]
```

#### Options

If you want to build `crx` file (auto update), please provide options, and add `update.xml` file url in [manifest.json](https://developer.chrome.com/extensions/autoupdate#update_url manifest.json).

* --app-id: your extension id (can be get it when you first release extension)
* --key: your private key path (default: './key.pem')  
  you can use `npm run compress-keygen` to generate private key `./key.pem`
* --codebase: your `crx` file url

See [autoupdate guide](https://developer.chrome.com/extensions/autoupdate) for more information.

## Test

* `test/app`: React components, Redux actions & reducers tests
* `test/e2e`: E2E tests (use [chromedriver](https://www.npmjs.com/package/chromedriver), [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver))

```bash
# lint
$ npm run lint
# test/app
$ npm test
$ npm test -- --watch  # watch files
# test/e2e
$ npm run build
$ npm run test-e2e
```

## LICENSE

[MIT](LICENSE)
