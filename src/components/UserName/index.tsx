import React, { FC } from "react";
import { User as UserType } from "../../types/User";

interface IUserName {
  userId: number;
  users: UserType[];
}

const UserName: FC<IUserName> = ({ userId, users = [] }) => {
  const user = users.find((user) => user.id === userId);

  return <>{user ? user.name : "Unknown User"}</>;
};

export default UserName;
