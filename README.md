# did-i-watch

**Did I Watch?** is a React.js web application that allows users to search for movies, view detailed information, and explore movie images. The app fetches data from The Movie Database (TMDb) API, providing an easy way to discover movies and, in future updates, keep track of what you've watched.

## Features

- **Movie Search**: Search for movies by title and browse through available options.
- **Movie Details**: View in-depth details of each movie, including images, overview, and ratings.
- **Tracking Watched Movies** (Upcoming): In future updates, users will be able to mark movies as "watched."

## Prerequisites

To run this application, you need a TMDb API key. Follow the steps below to set it up.

### Getting a TMDb API Key

1. Go to [TMDb's website](https://www.themoviedb.org/) and sign up for a free account.
2. Once signed in, navigate to your account settings and select **API**.
3. Request an API key and follow the instructions provided.
4. Copy your API key – you'll need it for the next step.

### Setting Up Environment Variables

1. In the root of the project directory, create a `.env` file.
2. Add the following line to the `.env` file, replacing `your_api_key_here` with the API key you obtained from TMDb:

   ```env
   REACT_APP_TMDB_API_KEY=your_api_key_here
   ```

### Installation

To install and run this project locally:

1. Clone the repository:
   git clone https://github.com/jhavagned/did-i-watch.git
   cd did-i-watch

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

Open http://localhost:3000 to view it in your browser.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Future Plans

    - Implement "Watched" functionality to let users track movies they’ve watched.
    - **User Authentication**: 
        - Add signup functionality for new users.
        - Implement login and logout functionality for user sessions.

#### Contributing

Contributions are welcome! If you’d like to contribute, please fork the repository, make your changes, and submit a pull request.

### License

This project is licensed under the MIT License. See the [LICENSE](./did-i-watch/LICENSE) file for more information.
