import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addUserToDb, getUserByIdFromDb, updatEUserAtDb } from '../redux/Action';

const UpdateUser = () => {
  const { id } = useParams();

  const [ids, setId] = useState(id);
  const [name, setName] = useState('');
  const [role, setRole] = useState('staff');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserByIdFromDb(id));
  }, []);

  const userobj = useSelector((state) => state.userReducer.userobj);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = { id, name, email, phone, role };
    dispatch(updatEUserAtDb(id, userobj));
    navigate('/userListing');
  };

  useEffect(() => {
    if (userobj) {
      setId(userobj.id);
      setName(userobj.name);
      setEmail(userobj.email);
      setPhone(userobj.phone);
      setRole(userobj.role);
    }
  }, [userobj]);

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-header text-center">
                <h2>Edit User</h2>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label>ID</label>
                  <input
                    value={ids}
                    disabled={true}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label>Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
              <div className="card-footer text-left">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/userListing" className="btn btn-danger ml-2">
                  Back
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
