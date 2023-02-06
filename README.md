# dmp-hub-ui

This repository contains the user interface for the DMPHub system. The DMPHub is a metadata repository for Data Management Plans (DMPs). The website is written in React.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Use Cases
See the wiki (need to build this page and add the link here)

## Data Sources

This application uses the DMPHub's API. The API uses a JSON format that is based on the [RDA Common Metadata Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) to describe DMP metadata. See the [dmp-hub-cfn repository's wiki](https://github.com/CDLUC3/dmp-hub-cfn/wiki/API-Overview) for the available endpoints, an example of the DMP JSON and explanations of each attribute.

## Infrastructure

This application is hosted in an AWS S3 bucket and served via an AWS Cloudfront distribution. See the [dmp-hub-cfn repository](https://github.com/CDLUC3/dmp-hub-cfn/tree/main) For information on these components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
