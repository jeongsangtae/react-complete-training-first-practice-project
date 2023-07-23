import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addedUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
    console.log(users);
  };

  return (
    <div>
      <AddUser onAddUser={addedUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
