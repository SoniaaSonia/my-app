import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import { thunk_getAction } from "../../Redux/action";

const Data = (props) => {
  console.log(props);
  const user = useSelector((state) => state.data.users);

  useEffect(() => {
    props.thunk_getAction();
  });
  return (
    <Container>
      {user &&
        user.map((item) => (
          <div>
            <h3>{item.id}</h3>
            <h6>{item.name}</h6>
            <h6>{item.username}</h6>
            <h6>{item.email}</h6>
            <h6>{item.phone}</h6>
            <h6>{item.website}</h6>
            <h6>{item.address && item.address.city}</h6>
            <h6>{item.address && item.address.street}</h6>
            <h6>{item.address && item.address.zipcode}</h6>
          </div>
        ))}
    </Container>
  );
};

const mapDispacthToProps = () => {
  return {
    thunk_getAction: () => thunk_getAction(),
  };
};

export default connect(mapDispacthToProps)(Data);
