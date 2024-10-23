# Your Places - MERN Frontend

YourPlaces is a social media application designed for sharing your travel experiences with the world. Built using the MERN stack (MongoDB, Express, React, Node.js) along with the CSS for styling, the platform allows for users to sign up or log in, create posts about the places they've visited, and upload photos. It integrates with the Google Maps API for location-based features and uses AWS S3 for persistent image storage. Users can edit their posts, and delete them if needed. The backend securely connects to a MongoDB database, managing both user profiles and individual place details.

This repository contains the frontend portion of the application, built with React and hosted using Firebase Static Hosting.

## Features

- **User Authentication**: 
  - Sign up, log in, and manage user profiles securely.
  
- **Create and Manage Posts**: 
  - Users can create posts about places they've visited, including adding images, descriptions, and locations.

- **Google Maps Integration**: 
  - Location-based features powered by Google Maps API, allowing users to pin and view places on a dynamic map.

- **AWS S3 Image Storage**: 
  - Images are uploaded to AWS S3 for persistent storage, ensuring they are retained even after backend redeployments.

- **Edit and Delete Posts**: 
  - Users can update or delete their posts, maintaining control over their content.

- **Responsive Design**: 
  - Built with responsive design principles using CSS, making the platform accessible on various devices.

- **MongoDB Database**: 
  - The backend is connected to a MongoDB database for secure storage of user data and place details.


## Tech Stack

### Frontend
- **React.js**: Used to build the dynamic and responsive user interface.
- **Firebase Hosting**: Used to serve the static frontend files and manage hosting.
- **Google Maps API**: Used for location selection when creating places.

### Backend (Not included in this repository)
- **MongoDB**: For data storage (users, places).
- **Express.js**: Backend framework for routing.
- **Node.js**: Server-side runtime environment.

You can find the backend repository [here](#) (https://github.com/dimitry-co/Your-Places-mern-backend).


## Live Demo

Check out the live app hosted on Firebase: [Your Places](https://firstproject-d2c32.web.app)

## Getting Started

To get started with this frontend project locally, follow these steps:

### Prerequisites

- **Node.js** and **npm**: Make sure you have Node.js and npm installed. You can download them from [here](https://nodejs.org/).

### Installation

1. **Clone the repository**:

    ```bash
    git clone git@github.com:dimitry-co/Your-Places-mern-frontend.git
    cd Your-Places-mern-frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    You’ll need to create a `.env` file in the root directory and add the following environment variables:

    ```
    REACT_APP_GOOGLE_API_KEY=your-google-maps-api-key
    REACT_APP_BACKEND_URL=your-backend-url
    REACT_APP_ASSET_URL=your-asset-url
    ```
    - Replace `your-google-maps-api-key` with your actual Google Maps API key.
    - Replace `your-backend-url` with the URL of your backend (e.g., `http://localhost:5001/api` for local development).
    - Replace `your-asset-url` with the URL for accessing assets.

4. **Run the app locally**:

    ```bash
    npm start
    ```

    The app will start on `http://localhost:3000`.

### Firebase Hosting

This project is hosted on Firebase. If you want to deploy your own version on Firebase, follow these steps:

1. **Install Firebase CLI**:

    ```bash
    npm install -g firebase-tools
    ```

2. **Log in to Firebase**:

    ```bash
    firebase login
    ```

3. **Initialize Firebase in your project**:

    ```bash
    firebase init
    ```

    Choose `Hosting` during the setup, and specify the `build` folder when asked for the directory to deploy.

4. **Deploy the project**:

    ```bash
    npm run build
    firebase deploy
    ```

## Project Structure

- **`places/`**: Contains components and pages related to managing places (e.g., creating, viewing, and editing places).
- **`shared/`**: Contains reusable UI elements, global state management files, custom hooks, and utility functions used throughout the app.
- **`user/`**: Handles components and pages related to user management (e.g., authentication, profile).
- **`App.js`**, **`index.js`**, and **`index.css`** are the core files that handle routing, app rendering, and global styles.
