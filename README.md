![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 13, 2016): Redux Basics - [Step 6]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-4...step-5)

* Installed [redux-devtools](https://github.com/gaearon/redux-devtools) to allow hot reloading, action replay, etc.
* Enhanced our Webpack configs to be environmentally aware to ensure `redux-devtools` are only available for local development
* Refactored `configureStore.js` to be environmentally specific

# Goals

1. Install [react-router-redux](https://github.com/reactjs/react-router-redux) 
2. Create baseline middleware, so we can share common middleware across environment specific stores
3. Move login and logout related routing to Redux layer
4. Create action to save a user's profile to local storage
5. Create action to validate a user's profile
6. Move StartScreen state into Redux layer
7. Convert stateless components into simple functions

# ReHacked


