import React from "react";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const user = useSelector((state) => state.user);
  if (user.email !== "")
    return (
      <div>
        Hi, <b>{user.email}</b>
        <br />
        your password is <b>{user.password}</b>
      </div>
    );
  return null;
};

export default UserInfo;
