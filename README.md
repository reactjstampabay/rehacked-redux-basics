![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (July 27, 2016): Redux Basics - [Step 4]
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# [When We Last Left Off...](https://github.com/reactjstampabay/rehacked-redux-basics/compare/step-2...step-3)

* Created a **Store** for our Redux app that React can use
* Implemented the concept of **Components** and **Containers** in our app
* Refactored our `app.js` to be simply concerned with scaffolding the app
* Created an App **Container** that contains the `react-router` config and supporting functions for auth
* Refactored our `StartScreen` and `Dashboard` to be **Containers** and wired them into Redux

# Goals

1. Consider how to arrange our folder structure as we build
1. Move the Login **Component** as a child of the StartScreen **Container**
1. Refactor the Dashboard **Container** to be composed of stateless components

# ReHacked

## Goal 1: Consider how to arrange our folder structure as we build

### Explanation

* As an application grows in size, it's highly recommended to commit to a folder structure for future maintainability and easier onboarding of new developers
* We established a `/src/containers` folder that will house the root of our routes
* The `/src/components` folder therefore should house _system-wide/shared_ components
* Any components that are really children of root **Containers** or their child **Containers** should be moved to their appropriate folders

### Instructions

1. Observe the current folder structure and code.  We see that the `Loading` and `Login` components are a bit out of place
2. We should probably move those under `/src/containers/StartScreen` as they are only being used by that **Container**

# Summary

In this section, we have accomplished the following:


[Back to the Step 3](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-3) || [Continue to Step 5](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-5)
