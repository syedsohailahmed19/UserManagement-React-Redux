import React, { useEffect } from "react";
import { fetchUserList, removeUser } from "../redux/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserListing = (props) => {
  useEffect(() => {
    props.loadUser();
  }, []);

  function handleDelete(value) {
    if (window.confirm("Do you want to delete this user?")) {
      props.deleteUser(value);
      console.log("value", value);
      props.loadUser();
      toast("Successfully deleted");
    }
  }

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">User Management</h2>
          <Link to={"/AddUser"} className="btn btn-success">
            Add User
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {props.user.userlist &&
                props.user.userlist.map((items) => (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.phone}</td>
                    <td>{items.role}</td>
                    <td>
                      <Link
                        to={"/updateUser/" + items.id}
                        className="btn btn-primary mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          handleDelete(items.id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(fetchUserList()),
    deleteUser: (value) => dispatch(removeUser(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
