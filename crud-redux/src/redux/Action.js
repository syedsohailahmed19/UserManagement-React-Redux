import axios from "axios";
import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_BYID,
  GET_USER_LIST,
  MAKE_REQUEST,
  UPDATE_USER,
} from "./ActionType";
import { toast } from "react-toastify";

const makeRequest = () => {
  return {
    type: MAKE_REQUEST,
  };
};

const failRequest = (error) => {
  return {
    type: FAIL_REQUEST,
    payload: error,
  };
};

const getUserList = (data) => {
  return {
    type: GET_USER_LIST,
    payload: data,
  };
};

export const fetchUserList = () => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("http://localhost:8002/user")
      .then((res) => {
        const userList = res.data;
        dispatch(getUserList(userList));
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(failRequest(error.message));
      });
  };
};

const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};

export const removeUser = (id) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .delete("http://localhost:8002/user/" + id)
      .then((res) => {
        dispatch(deleteUser());
      })
      .catch((error) => {
        console.log("error", error);
        dispatch(failRequest(error.message));
      });
  };
};

export const addUser = () => {
  return {
    type: ADD_USER,
  };
};

export const addUserToDb = (data) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .post("http://localhost:8002/user", data)
      .then((res) => {
        dispatch(addUser());
        toast.success("user Added SuccessFully");
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};

export const getUserBytheId = (data) => {
  return {
    type: GET_USER_BYID,
    payload: data,
  };
};

export const getUserByIdFromDb = (id) => {
  return (dispatch) => {
    dispatch(makeRequest);
    axios
      .get("http://localhost:8002/user/" + id)
      .then((res) => {
        const userById = res.data;
        dispatch(getUserBytheId(userById));
      })
      .catch((error) => {
        failRequest(error.message);
      });
  };
};

export const updateUser = () => {
  return {
    type: UPDATE_USER,
  };
};

export const updatEUserAtDb = (id, data) => {
  return (dispatch) => {
    dispatch(makeRequest());
    axios
      .put("http://localhost:8002/user/" + id, data)
      .then(() => {
        dispatch(updateUser());
        toast.success("user Detail was updated Successfully")
      })
      .catch((error) => {
        dispatch(failRequest(error.message));
      });
  };
};
