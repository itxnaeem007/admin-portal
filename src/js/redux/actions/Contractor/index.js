import { axiosInstance } from "../../../utils/api/useFetch";
import { toast } from "react-toastify";
import { handleLogout } from "../../../redux/actions";
import { isSessionExpire } from "../../../helpers/GeneralHelper";

export const GET_USER = "GET USER [ATCO]";
export const UPDATE_ACCESS = "DELETE USER [ATCO]";
export const UPDATE_STATUS = "UPDATE USER [ATCO]";

export const getUser = (params) => {
  return (dispatch) => {
    return axiosInstance
      .post("/admin/get/users")
      .then((res) => {
        if (res.data.response) {
          dispatch({
            type: GET_USER,
            payload: res.data.response,
          });
        }
      })
      .catch((e) => {
      });
  };
};


export const updateAccess = (email) => {
  return (dispatch) => {
    return axiosInstance
      .post("/admin/status/toggle/", {
        email
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.response.message || "Access Changed Succesfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        }
      })
      .catch((e) => {
        if (isSessionExpire(e)) {
          dispatch(handleLogout());
        } else {

        }
      });
  };
};

export const updateStatus = (email) => {
  return (dispatch) => {
    return axiosInstance
      .post("/admin/block/toggle/", {
        email
      })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.response.message || "Access Changed Succesfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
          });
        }
      })
      .catch((e) => {

      });
  };
};
