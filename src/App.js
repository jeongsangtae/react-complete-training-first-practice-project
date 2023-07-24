import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  // 내가 짠 코드
  // const addedUserHandler = (user) => {
  //   // 여러 문장으로 이루어진 경우 return과 {}를 사용해 반환하는 방법
  //   // setUsers((prevUsers) => {
  //   //   return [user, ...prevUsers];
  //   // });

  //   // 단일 표현식 반환
  //   setUsers((prevUsers) => [user, ...prevUsers]);
  //   console.log(users);
  // };

  // 강의의 코드
  const addedUserHandler = (uName, uAge) => {
    // return과 {}를 사용해 반환하는 방법을 사용
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        { username: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addedUserHandler} />
      <UserList users={users} />
    </div>
  );
};

export default App;
