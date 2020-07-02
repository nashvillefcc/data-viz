## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
  - [Styling](#styling)
- [Getting Started](#getting-started)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)

## About The Project

This project is an educational exercise meant to familiarize developers with
graphing libraries. It will also serve as a data vizualization toolkit for
members of FCC Nashville in future endeavors.

### Built With

This project was bootstrapped with:

- [Create React App](https://github.com/facebook/create-react-app)
- [Semantic UI React](https://react.semantic-ui.com)

### Styling

Use [styled-components](https://styled-components.com/) to modify components [Semantic UI React](https://react.semantic-ui.com) as needed.

This [article](https://medium.com/serverlessguru/customizing-the-semantic-ui-react-library-with-styled-components-41cdab34be29) and existing components can be used as a reference.

## Getting Started

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

## Roadmap

See the [task board](https://github.com/nashvillefcc/data-viz/projects/1) for a list of proposed features and known issues.

## State management

State is managed using React hooks
selectedLibrary and selectedChartType in /Layout/index.js are currently the most shared state

Prop drilling is used to pass state down. This is a good opportunity to use another type of state management such and React.Context

## Contributing

When contributing to this repository, please first discuss the change you wish to make with the
owners of this repository before making a change or assigning yourself to a ticket. We can be
contacted via discord or issue.

See the [CONTRIBUTING](https://github.com/nashvillefcc/data-viz/blob/master/CONTRIBUTING.md) page for more details.

## Contact

Pete - moribundmedium@gmail.com
