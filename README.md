# MERN_Instagram 📸

## Project Overview

This repository contains the source code for a fully featured Instagram clone developed using ReactJS for the frontend, NodeJS and ExpressJS for the backend, and MongoDB as the database.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Database Schema](#database-schema)
8. [Contributing](#contributing)

## Introduction

This Instagram clone replicates the core features of the original platform, providing users with the ability to register, post images, follow other users, and interact with posts through likes and comments. The frontend is built using ReactJS to ensure a responsive and dynamic user interface, while the backend, powered by NodeJS and ExpressJS, handles authentication, data storage, and retrieval through MongoDB.

## Features

- **User Authentication:** Users can register and log in securely. 🔐
- **Image Upload:** Users can upload images to share with their followers. 📤
- **Follow System:** Users can follow and unfollow other users. ➕➖
- **Like and Comment:** Users can interact with posts through likes and comments. ❤💬
- **Followed Users Feed:** A personalized news feed displaying posts from followed users. 📰

## Technologies Used

- **Frontend:**
  - ReactJS

- **Backend:**
  - NodeJS
  - ExpressJS

- **Database:**
  - MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/nischay-code/MERN_Instagram.git
cd MERN_Instagram
```

2. Install dependencies for the frontend and backend:
```bash
cd frontend
npm install

cd ../backend
npm install
```

3. Set up the MongoDB database and update the connection string in the config.js file.

4. Run the application:

```bash
# Start the backend server
cd backend
npm start

# Start the frontend development server
cd frontend
npm start

The application will be accessible at http://localhost:3000.
```
## Usage

1. **Register:** Create an account or log in if already registered.
2. **Explore:** Navigate through the follow other users and interact with posts.
3. **Share:** Upload your images to share with followers.

## API Endpoints

- **POST /api/users/register:** Register a new user.
- **POST /api/users/login:** Log in an existing user.
- **GET /api/posts:** Retrieve all posts.
- **POST /api/posts:** Create a new post.
- **POST /api/posts/:postId/like:** Like a post.
- **POST /api/posts/:postId/comment:** Add a comment to a post.
- **POST /api/users/:userId/follow:** Follow a user.
- **DELETE /api/users/:userId/unfollow:** Unfollow a user.

For detailed request and response formats, refer to the API documentation.

## Database Schema

The MongoDB database is structured with collections for users, posts, likes, and comments. Refer to the schema documentation for a detailed structure.

## Contributing

Feel free to contribute by submitting bug reports, feature requests, or pull requests. Follow the guidelines outlined in the CONTRIBUTING.md file.

🚀 Happy Coding! 🚀

