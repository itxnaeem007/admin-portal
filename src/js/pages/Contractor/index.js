import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateAccess, updateStatus } from "../../redux/actions";
import ContractorTemplate from "../../components/templates/contractor";
import TableListing from "../../components/organisms/table-listing/index";
import { Button, Input } from "../../components/atoms";
import { SimpleModal } from "../../components/atoms";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import { useForm } from "react-hook-form";
import RowRecord from "./RowRecord";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { FcAcceptDatabase } from "react-icons/fc";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: "Auto",
  },
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "Auto",
  },
  button: {
    borderRadius: 25,
    padding: "0.5em 2.0em",
    margin: "0 0.5em",
    fontSize: "12px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    padding: "0.5em 2.0em",
    margin: "0.5em 0.8em",
    fontSize: "12px",
  },
  deleteButton: {
    padding: "0.5em 2.0em",
    margin: "0.5em 0.8em",
    fontSize: "12px",
    backgroundColor: "#f76c6c",
    color: "white",
  },
  acceptButton: {
    padding: "0.5em 2.0em",
    margin: "0.5em 0.8em",
    fontSize: "12px",
    backgroundColor: "#04633b",
    color: "white",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    borderRadius: "7px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 8, 3),
  },
}));

const contractorState = {
  id: 0,
  first_name: "",
  last_name: "",
  email: "",
  phoneNo: "",
  rate: 1,
  companyName: "",
  password: "",
};

function Contractor() {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Access",
      accessor: "status",
    },
    {
      Header: "Status",
      Cell: (row) => {
        return (
          <React.Fragment>
            <CgArrowsExchangeAltV
              style={{ color: "green", fontSize: "24px" }}
              onClick={()=>{handleStatusChange(row.original.email)}}
            />
            {row.original.is_blocked === true? <div>Blocked</div> : <div>Active</div>}
          </React.Fragment>
        );
      },
    },
    {
      Header: "Action",
      sortable: false,
      width: 70,
      Cell: (row) => {
        return (
          <React.Fragment>
            <FcAcceptDatabase
              style={{ fontSize: "24px" }}
              onClick={() =>
                confirmDelete(row.original.email, row.original.status)
              }
            />
          </React.Fragment>
        );
      },
    },
  ];
  const [openCreate, setOpenCreate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [id, setId] = useState(0);
  const [contractor, setContractor] = useState(contractorState);
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const state = useSelector(({ Contractor }) => Contractor);
  const dispatch = useDispatch();
  const { handleSubmit } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const classes = useStyle();

  const createToggleModal = () => {
    if (openCreate) {
      setFlag(false);
      setOpenCreate(!openCreate);
      setTimeout(function () {
        setContractor(contractorState);
      }, 200);
    }
    setOpenCreate(!openCreate);
  };
  const AccessToggleModal = () => {
    setOpenDelete(!openDelete);
  };

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const confirmDelete = (val, statusVal) => {
    AccessToggleModal();
    setEmail(val);
    setStatus(statusVal);
  };
  const handleAccessChange = async () => {
    setLoading(true);
    await dispatch(updateAccess(email));
    setFlag(false);
    setLoading(false);
    dispatch(getUser());
    AccessToggleModal();
  };

  const handleStatusChange = async (val) => {
    setLoading(true);
    await dispatch(updateStatus(val));
    setFlag(false);
    setLoading(false);
    dispatch(getUser());
  };

  const deleteModalBody = (
    <Fade in={openDelete}>
      <div className={classes.paper}>
        <div>
          <h2 style={{ textAlign: "center", color: "#f76c6c" }}>
            Approve/Reject
          </h2>
          <hr style={{ marginBottom: "30px" }} />
          <p>Are you sure you want to change the status of the user ?</p>
        </div>

        <div className={classes.base}>
          <Button
            click={AccessToggleModal}
            className={{ root: classes.modalButton }}
            value={"Cancle"}
            color="inherit"
            varient="outlined"
            disableElevation={true}
          />
          {status === "PENDING" ? (
            <Button
              click={handleAccessChange}
              className={{ root: classes.acceptButton }}
              value={"Accept"}
              varient="contained"
              color={"primary"}
              disableElevation={true}
            />
          ) : (
            <Button
              click={handleAccessChange}
              className={{ root: classes.deleteButton }}
              value={"Reject"}
              varient="contained"
              color={"secondary"}
              disableElevation={true}
            />
          )}
        </div>
      </div>
    </Fade>
  );

  useEffect(() => {
    setLoading(true);
    dispatch(getUser()).then(() => {
      setLoading(false);
    });
    // dispatch(getRateList());
  }, []);

  useEffect(() => {
    setData(state.users);
  }, [state]);

  return (
    <>
      <ContractorTemplate>
        <div className={classes.root}>
          {/* <Button
            click={createToggleModal}
            variant="contained"
            disableElevation={true}
            color="primary"
            value={"Add user"}
            className={{ root: classes.button }}
          /> */}
        </div>

        <SimpleModal
          body={deleteModalBody}
          open={openDelete}
          toggleModal={AccessToggleModal}
        />
        <TableListing
          loading={loading}
          columns={columns}
          SubComponent={(row) => {
            return <RowRecord dataObj={row?.original} />;
          }}
          data={data}
          minRows={data && data.length > 10 ? data.length : 10}
        />
      </ContractorTemplate>
    </>
  );
}

export default Contractor;
