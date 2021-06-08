import { Avatar, Tooltip } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import React from "react";
import { User } from "../../../models/User";

function hashCode(str: string) {
  // java String#hashCode
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(number: number) {
  var c = (number & 0x00ffffff).toString(16).toUpperCase();

  const val = "00000".substring(0, 6 - c.length) + c;
  return "#" + val;
}

interface Props {
  users: User[];
  max?: number;
}

const UsersAvatarGroup = ({ users, max = 3 }: Props) => {
  return users.length > 0 ? (
    <AvatarGroup max={max}>
      {users.map((user) => (
        <Tooltip key={user.username} title={user.username}>
          <Avatar
            style={{ backgroundColor: intToRGB(hashCode(user.username)) }}
          >
            {user.username[0]}
          </Avatar>
        </Tooltip>
      ))}
    </AvatarGroup>
  ) : (
    <Tooltip title="No authors detected">
      <Avatar>N/A</Avatar>
    </Tooltip>
  );
};

export default UsersAvatarGroup;
