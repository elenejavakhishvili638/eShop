# eShop App

The eShop App is a full-stack web application that allows users to authenticate and shop for various products. With an interactive front-end, users can browse through product listings, add items to their cart, and proceed to checkout.
The backend handles user registration, login, and checkout processes, ensuring e-commerce platform.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

## Prerequisites

Before diving into the eShop App, you'll need to have the following tools installed on your system:

- [Node.js](https://nodejs.org/) - Version 16.3.0 or higher
- [npm](https://www.npmjs.com/) - Node.js package manager

## Tech Stack

The application is crafted using a combination of the following technologies:

### Backend:

- [Node.js](https://nodejs.org/): For server-side logic.
- [Express.js](https://expressjs.com/): Web framework for creating API endpoints.
- [Mongoose](https://mongoosejs.com/): For schema-based solution to model application data.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): To create encoded JWTs for auth.
- [bcrypt](https://www.npmjs.com/package/bcrypt): For password hashing and security.

### Frontend:

- [React](https://reactjs.org/): To build a dynamic user interface.
- [axios](https://github.com/axios/axios): For making HTTP requests from the frontend.
- [react-router-dom](https://reactrouter.com/web/guides/quick-start): For routing and navigation.
- [react-icons](https://react-icons.github.io/react-icons/): To enhance the UI with icons.

## Getting Started

Follow these instructions to get your copy of the eShop App up and running on your local machine for development and testing purposes.

1. Clone the repository:

   ```bash
   git clone https://github.com/elenejavakhishvili638/eShop.git

   ```

2. Change to the project directory:

   ```bash
   cd eShop
   ```

3. For backend setup, navigate to the backend directory and run:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root for the backend. Configure the necessary environment variables, including the MongoDB connection URI, JWT secret, and other pertinent details.

5. Start the backend server:

   ```bash
   npm run dev
   ```

6. For frontend setup, navigate to the frontend directory and run:

   ```bash
   npm install
   ```

7. Start the frontend development server:
   ```bash
   npm run dev
   ```

The eShop application should now be running locally. By default, the backend should be at `http://localhost:3001` and frontend at `http://localhost:3000`.
