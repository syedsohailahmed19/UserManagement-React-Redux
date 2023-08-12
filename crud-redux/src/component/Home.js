import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">User Management System</h1>
        <p className="lead">
          This system demonstrates:
        </p>
        <ul>
          <li>CRUD operations using Redux for efficient state management</li>
          <li>Fetching data from a JSON Server database using Axios</li>
          <li>Toast messages (using <code>react-toastify</code>) for alerts during read, update, or delete actions</li>
        </ul>
        <hr className="my-4" />
        <p>
          <strong>Get started:</strong>
        </p>
        <ul>
          <li>
            <Link to="/userListing" className="btn btn-primary btn-lg rounded-pill px-4">
              User Listing
            </Link>
            {/* Navigate to the User Listing page */}
          </li>
          <li>
            <Link to="/addUser" className="btn btn-success btn-lg rounded-pill px-4">
              Add User
            </Link>
            {/* Navigate to the Add User page */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
