import { Pagination } from "@material-ui/lab";
import React, { useState } from "react";
import usePagination from "../../components/pagination";
import TableC from "../../components/table";
import EditModal from "../../components/modal/editmodal";
import "./index.css";
import DeleteModal from "../../components/modal/deletemodal";
import { Button } from "@mui/material";
import AddModal from "../../components/modal/addmodal";

const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isShowAdd, setIsShowAdd] = useState(false);

  const [state, setState] = useState("");
  const [userData, setUserData] = useState([
    {
      id: 1,
      firstName: "Deshmukh",
      lastName: "Prohaska",
      userName: "@Genelia",
    },
    {
      id: 2,
      firstName: "Deshmukh",
      lastName: "Gaylord",
      userName: "@Ritesh",
    },
    {
      id: 3,
      firstName: "Sanghani",
      lastName: "Gusikowski",
      userName: "@Govinda",
    },
    {
      id: 4,
      firstName: "Roshan",
      lastName: "Rogahn",
      userName: "@Hritik",
    },
    {
      id: 5,
      firstName: "Joshi",
      lastName: "Hickle",
      userName: "@Maruti",
    },
    {
      id: 6,
      firstName: "Nigam",
      lastName: "Eichmann",
      userName: "@Sonu",
    },
    {
      id: 7,
      firstName: "Roshan",
      lastName: "Rogahn",
      userName: "@Hritik",
    },
    {
      id: 8,
      firstName: "Deshmukh",
      lastName: "Gaylord",
      userName: "@Ritesh",
    },
    {
      id: 9,
      firstName: "Nigam",
      lastName: "Eichmann",
      userName: "@Sonu",
    },
    {
      id: 10,
      firstName: "Joshi",
      lastName: "Hickle",
      userName: "@Maruti",
    },
    {
      id: 11,
      firstName: "Roshan",
      lastName: "Rogahn",
      userName: "@Hritik",
    },
    {
      id: 12,
      firstName: "Joshi",
      lastName: "Hickle",
      userName: "@Maruti",
    },
    {
      id: 13,
      firstName: "Nigam",
      lastName: "Eichmann",
      userName: "@Sonu",
    },
    {
      id: 14,
      firstName: "Roshan",
      lastName: "Rogahn",
      userName: "@Hritik",
    },
    {
      id: 15,
      firstName: "Deshmukh",
      lastName: "Gaylord",
      userName: "@Ritesh",
    },
  ]);
  const userKeys = ["Id", "First Name", "Last Name", "User Name", "Action"];

  let [page, setPage] = useState(1);
  const PER_PAGE = 3;

  const count = Math.ceil(userData.length / PER_PAGE);
  const _DATA = usePagination(userData, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const handleClick = (id) => {
    const updatedData = userData.find((item) => item.id === id);
    setState(updatedData);
    setIsOpen(true);
  };

  const handleOnClick = () => {
    setIsShow(true);
  };

  const handleUpdate = (data) => {
    const updatedData = userData.findIndex((item) => item.id === data.id);
    userData[updatedData] = data;
    setUserData(userData);
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    userData.splice(userData.indexOf(id) + 1, 1);
    setUserData(userData);
    setIsShow(false);
  };

  const handleAdd = (data) => {
    data.id = userData.length + 1;
    userData.splice(data.id, 0, data);
    setUserData(userData);
    setIsShowAdd(false);
  };

  return (
    <div className="bd-cnt">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <h2>Users</h2>
        <div
          style={{
            marginRight: "50px",
          }}
        >
          <Button onClick={() => setIsShowAdd(true)} primary variant="outlined">
            Add Users
          </Button>
        </div>
      </div>
      <TableC
        data={_DATA.currentData()}
        handleEdit={handleClick}
        handleOnCLick={handleOnClick}
        userKeys={userKeys}
      />
      <DeleteModal
        open={isShow}
        handleDelete={() => handleDelete()}
        handleClose={() => setIsShow(false)}
      />
      <AddModal
        showadd={isShowAdd}
        handleAdd={handleAdd}
        handleClose={() => setIsShowAdd(false)}
      />
      <EditModal
        show={isOpen}
        initialValues={state}
        handleSubmit={(e) => handleUpdate(e)}
        handleClose={() => setIsOpen(false)}
      />
      <div className="paginate-cnt">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
export default User;
