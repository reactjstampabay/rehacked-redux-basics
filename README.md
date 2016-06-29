![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics - Initial
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# When We Last Left Off...

* We created a rudimentary React SPA setup from the last [ReHacked Lab](https://github.com/reactjstampabay/rehacked-spa-basics-solution-set)

# Goals

1. Install [Redux](https://github.com/gaearon/redux), [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/gaearon/redux-logger)

# ReHacked

## Prerequisites

1. Fork `https://github.com/reactjstampabay/rehacked-redux-basics` to your personal GitHub
1. In a shell, execute `git clone https://github.com/[your GH username]/rehacked-redux-basics.git`
1. Execute `git checkout initial`
1. Execute `npm3 install`

## Goal 1: Install Redux, redux-thunk, and redux-logger

### Explanation

* **Redux** is the state management library we will use for our React SPA
* **redux-thunk** allows us to manage actions in an asychronous fashion. The most common use case is if we first need to call out to a Web API before dispatching an action.
* **redux-logger** logs state changes to the console for development purposes

### Instructions

1. Execute `npm3 install redux redux-thunk redux-logger --save`
1. Ensure your `package.json` has these entries saved to its dependencies

# Summary

In this section, we have accomplished the following:

* Installed Redux and some supporting libraries

[Continue to Step 1](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-1)
