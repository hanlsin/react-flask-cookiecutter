# [React+Flask Web Cookie-Cutter](https://github.com/hanlsin/react-flask-cookiecutter) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hanlsin/react-flask-cookiecutter/blob/master/LICENSE)

This is a cookie-cutter repository to initialise a web project with the React client and the Flask server.

## Client based on [React](https://github.com/facebook/react)

`React` is a JavaScript library for building user interfaces. Please use [this link](https://reactjs.org/) for more details.

This react application is created by [CRA](https://github.com/facebook/create-react-app).

### Additional Dependencies

* [easy-peasy](https://easy-peasy.now.sh/)
* [react-bootstrap](https://react-bootstrap.github.io/)
* [styled-components](https://styled-components.com/)
* [react-fontawesome](https://github.com/FortAwesome/react-fontawesome)

#### Dev

* [Prettier](https://prettier.io/)

## Server based on [Flask](https://github.com/pallets/flask)

* [Flask]() >= 1.1.2

## Prepare

### Server

```bash
pipenv shell
pipenv install
```

### Client

```bash
cd react_app
yarn install
```

## Run React & Flask together

```bash
cd react_app
yarn build
cd ..
runserver
```

`runserver` command is defined in `Pipfile`

## Run React & Flask respectively

### Run Flask

```bash
runserver
```

### Run React

```bash
cd react_app
yarn start
```


---------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
