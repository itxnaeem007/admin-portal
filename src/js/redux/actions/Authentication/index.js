import { axiosInstance } from "../../../utils/api/useFetch";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

export const LOGIN_SUCCESS = "HANDLE LOGIN [ATCO]";
export const TOKEN_VERIFY = "TOKEN VERIFY [ATCO]";
export const LOGOUT_SUCCESS = "LOGOUT SUCCESS [ATCO]";
export const PASSWORD_RESET_SUCCESS = "PASSWORD RESET SUCCESS [ATCO]";

export const handleLogin = (email, password) => {
  return (dispatch) => {
    return axiosInstance
      .post("/user/login", { email, password })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data.response.token);
          toast.success("Login Successfully.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
          return dispatch({
            type: LOGIN_SUCCESS,
            payload: { token: res.data.response.token, auth: true },
          });
        }
      })
      .catch((e) => {
        let message = e?.response?.data?.message;

        toast.error(message || "Server error",  {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      });
  };
  return false;
};

export const handleVerify = () => {
  return (dispatch) => {
    let token = localStorage.getItem("token");
    if (token) {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: token, auth: true },
      });
    }
  };
};

export const handleLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    return dispatch({
      type: LOGOUT_SUCCESS,
    });
  };
};

export const resetPassword = ({ email }) => {
  return (dispatch) => {
    return axiosInstance
      .post("/user/forgot/password/request", { email })
      .then((res) => {
        //console.log(res);
        if (res.data) {
          toast.success("Password Reset Link Sent To Email!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        }
      })
      .catch((e) => {
        toast.error("Wrong Credentials!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
        });
      });
  };
};

export const changePassword = (password, token) => {
  return (dispatch) => {
    return axiosInstance
      .post(`/user/password/reset/${token}`, { token, password ,password_confirmation : password })
      .then((res) => {
        console.log(res);
        if (res.data) {
          console.log(res.data);
          toast.success("Password Change Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
          // return dispatch({
          //   type: PASSWORD_RESET_SUCCESS,
          // });
          return "success";
        }
      })
      .catch((e) => {
        console.log("Error from reset Screen =>", e?.response.data);
        if (e?.response.data.password) {
          toast.error(e?.response.data.message || "Wrong Credentials!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        }
      });
  };
};
