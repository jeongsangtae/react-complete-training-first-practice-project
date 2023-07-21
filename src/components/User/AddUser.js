import React from "react";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.input} onSubmit={addUserHandler}>
      <lable className={styles.input}>Username</lable>
      <input type="text" className={styles.input} />
      <label className={styles.input}>Age</label>
      <input type="number" className={styles.input} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
