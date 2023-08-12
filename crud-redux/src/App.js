import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UserListing from "./component/UserListing";
import AddUser from "./component/AddUser";
import UpdateUser from "./component/UpdateUser";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/userListing"} className="nav-link">
                    User
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userListing" element={<UserListing />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/updateUser/:id" element={<UpdateUser />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </Provider>
  );
}

export default App;
