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

## Goal 2: Move the Login **Component** as a child of the StartScreen **Container**

### Explanation

* Because the `Loading` and `Login` components currently under `/src/components` aren't really _system-wide_ components, they should be moved under the **Container** that uses them
* This type of refactoring happens constantly as UI's evolve over iteration

### Instructions

1. Move `/src/components/Loading` to `/src/containers/StartScreen`
2. Move `/src/components/Login` to `/src/containers/StartScreen`
3. Update `/src/containers/Login/index.js` and update the reference to the Loading component to `import Loading from './Loading';`
4. Update `/src/containers/StartScreen/index.js` and update the reference to the Login component to `import Login from './Login';`

## Goal 3: Refactor the Dashboard **Container** to be composed of stateless components

### Explanation

* `/src/containers/Dashboard/index.js` is rather unmaintainable, as it is a huge piece of JSX DOM
* As you iterate and finalize your UI, it is very normal to refactor initially large **Containers** to child **Containers** or **Components**

### Instructions

1. Create a `/src/components/Avatar.js` file. Copy and paste [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/b71a03f8aac842a6804e7b11aecb83b26765b2a3/src/components/Avatar.js)
1. Create a `/src/components/Header.js` file. Copy and paste [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/b71a03f8aac842a6804e7b11aecb83b26765b2a3/src/components/Header.js)
1. Create a `/src/components/LeftNavigation.js` file. Copy and paste [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/b71a03f8aac842a6804e7b11aecb83b26765b2a3/src/components/LeftNavigation.js)
1. Create a `/src/components/NavigationMenu.js` file. Copy and paste [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/b71a03f8aac842a6804e7b11aecb83b26765b2a3/src/components/NavigationMenu.js)
1. Create a `/src/containers/Dashboard/DashboardContent/index.js` file. Copy and paste [`/src/components/Avatar.js`](https://raw.githubusercontent.com/reactjstampabay/rehacked-redux-basics/b71a03f8aac842a6804e7b11aecb83b26765b2a3/src/containers/Dashboard/DashboardContent/index.js)
1. Edit `/src/containers/Dashboard/index.js`.  
  * Add the following to import statements at the top of the file
  ```javascript
  import Header from '../../components/Header';
  import LeftNavigation from '../../components/LeftNavigation';
  import DashboardContent from './DashboardContent';
  ```
  * While still in `/src/containers/Dashboard/index.js` edit the `render` function to resemble the code below
  ```javascript
  render() {
    return (
      <div>
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
          <Header />
          <LeftNavigation handleLogout={this._logout} user={this.props.user} />
          <DashboardContent />
        </div>
      </div>
    );
  }
  ```

# Summary

In this section, we have accomplished the following:

* Committed to a folder structure for ongoing maintenance and onboarding
* Moved localized **Components** to their parent **Containers**
* Established `/src/components` to hold _system-wide/shared_ **Components**
* Decomposed `/src/containers/Dashboard/index.js` to its localized **Components** and moved system-wide **Components** to `/src/components`

[Back to the Step 3](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-3) || [Continue to Step 5](https://github.com/reactjstampabay/rehacked-redux-basics/tree/step-5)
