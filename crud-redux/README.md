# User Management System using React, Redux, and Axios

This project demonstrates a User Management System with CRUD (Create, Read, Update, Delete) operations. It's built using React for the frontend, Redux for state management, and Axios for API communication with a JSON Server database. The application allows users to view, add, edit, and delete user records. Toast messages (using react-toastify) provide alerts for actions.

## Installation

1. Clone the repository.
2. Install project dependencies:
   ```bash
   npm install
## Install JSON Server globally (if not installed):

npm install -g json-server

Starting the Application
Start the JSON Server to serve the data (ensure you're in the project root directory):
json-server --watch src/Data/db.json --port 8002
In a separate terminal, start the React application:


## start
npm start
The app will run in development mode on http://localhost:3000.
Navigate to http://localhost:3000 to access the User Management System.

The page allows you to manage users, perform CRUD operations, and displays toast messages for alerts during actions.
