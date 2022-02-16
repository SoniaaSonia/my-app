import { Button } from "@mui/material";
import React from "react";

const TableC = ({ ...props }) => {
  const userdata = props.data.map((item, index) => (
    <tr key={index}>
      {/* {Object.values(item).map((val) => (
       <td>{val}</td>
      ))} */}
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.userName}</td>
      <td>
        <Button onClick={() => props.handleEdit(item.id)}>Edit</Button>
        <Button onClick={() => props.handleOnCLick(item.id)}>Delete</Button>
      </td>
    </tr>
  ));

  const Columns = props.userKeys.map((name) => <th>{name}</th>);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table user-table no-wrap">
                    <thead>
                      <tr>{Columns}</tr>
                    </thead>
                    <tbody>{userdata}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableC;
