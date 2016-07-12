![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 13, 2016): Redux Basics - [Step 5]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-3...step-4)

* Committed to a folder structure for ongoing maintenance and onboarding
* Moved localized **Components** to their parent **Containers**
* Established `/src/components` to hold _system-wide/shared_ **Components**
* Decomposed `/src/containers/Dashboard/index.js` to its localized **Components** and moved system-wide **Components** to `/src/components`

# Goals

1. Install [redux-devtools](https://github.com/gaearon/redux-devtools)
2. Enhance our two Webpack configs to be environmentally aware so `redux-devtools` only occurs for local development
3. Refactor `configureStore.js` to be environmentally specific

# ReHacked

## Goal 1: Install [redux-devtools](https://github.com/gaearon/redux-devtools)

### Explanation

* [redux-devtools](https://github.com/gaearon/redux-devtools) is an optional add-on that allows you to easily debug your Redux application on any browser
  * Optionally, there is a Chrome plugin whose install we will not cover in this lab, but feel free to experiment!

### Instructions

1. If you are currently running `webpack-dev-server`, exit the process for now.
1. Open a terminal in the root of the application. Execute `npm3 install redux-devtools redux-devtools-dock-monitor redux-devtools-log-monitor --save-dev`
2. Establish a `/src/containers/DevTools/index.js` file.  Copy and paste [`/src/containers/DevTools/index.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/f068767891b21854e10d2a56f11aefe4153e17f7/src/containers/DevTools/index.js)
3. Edit `/src/app.js`.  Replace its contents with [`/src/app.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/f068767891b21854e10d2a56f11aefe4153e17f7/src/app.js)

## Goal 2: Enhance our two Webpack configs to be environmentally aware so `redux-devtools` only occurs for local development

### Explanation

* We only want `redux-devtools` to show itself during local development. Therefore, we need to bake in some "environmental awareness" to our Webpack configurations
* Webpack's DefinePlugin allows you to specify a string that Webpack will search for in your files and swap out with a literal value
  * In our case, we had already started this with our modified `/src/app.js` above in the bit where we check on `process.env.NODE_ENV === 'dev'`
  * Now, we need to actually have Webpack swap out `process.env.NODE_ENV` with a value of `dev` when we are building locally only so that statement becomes true

### Instructions

1. Edit `webpack.config.js`.  Replace the `plugins` section to look like the following:
  
  ```javascript
  plugins: [
    new ExtractTextPlugin('app.css'),
    new OpenBrowserPlugin({url: 'http://localhost:8080'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ],
  ```
  
2. Edit `webpack.production.config.js`.  Replace the `plugins` section to look like the following:
  
  ```javascript
  plugins: [
    new ExtractTextPlugin('app.css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  ```

## Goal 3: Refactor `configureStore.js` to be environmentally specific

### Explanation

* Because redux-devtools requires a little bit of boilerplate code in your **Store** to work, we will also need to refactor `configureStore.js` to be environmentally specific
* The suggested method of doing this is to have `configureStore.js` simply be a proxy for different implementations of the **Store** depending on the environment

### Instructions

1. Create a `/src/common/store/configureStore.prod.js` file.  Cut and paste the contents of your current `/src/common/store/configureStore.js` to this file.
1. Create a `/src/common/store/configureStore.dev.js` file.  Copy and paste the contents of [`/src/common/store/configureStore.dev.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/f068767891b21854e10d2a56f11aefe4153e17f7/src/common/store/configureStore.dev.js)
1. Edit `/src/common/store/configureStore.js`.  Copy and paste the contents of [`/src/common/store/configureStore.js](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/f068767891b21854e10d2a56f11aefe4153e17f7/src/common/store/configureStore.js)
1. Open a terminal in the root of your application and execute `npm3 run dev` to see Redux DevTools

# Summary

In this section, we have accomplished the following:

* Installed [redux-devtools](https://github.com/gaearon/redux-devtools)
* Enhanced our two Webpack configs to be environmentally aware so `redux-devtools` only occurs for local development
* Refactored `configureStore.js` to be environmentally specific

[Back to the Step 4](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-4) || [Continue to Step 6](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-6)
