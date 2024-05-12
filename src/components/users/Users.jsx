import React from "react";
import { users } from "../../static/index";
import { MdOutlineStar } from "react-icons/md";
import { Container } from "@mui/material";
const Users = () => {
  const userCard = users.map((user) => (
    <div key={user.id} className="user__card">
      <img src={user.image} alt="" className="user__image" />
      <div className="user__title">
        <h2>{user.name}</h2>
        <p>{user.description}</p>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <MdOutlineStar key={index} />
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <Container maxWidth="lg" className="container">
      <div className="users">{userCard}</div>
    </Container>
  );
};

export default Users;
