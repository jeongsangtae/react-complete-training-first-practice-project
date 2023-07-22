import React from "react";

import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles.users}>
      <li>{props.onSubmit}</li>
      <li>{props.onSubmit}</li>
    </ul>
  );
};

export default UserList;
