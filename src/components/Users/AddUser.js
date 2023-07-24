import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // 단항 덧셈 연산자를 사용해 변수를 강제로 숫자로 변환
    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUsername, enteredAge);

    // AddUser 컴포넌트에서 먼저 저장하는 코드
    // 내가 짠 코드
    // const saveUserData = {
    //   username: enteredUsername,
    //   age: +enteredAge,
    //   // id: Math.random().toString(),
    // };

    props.onAddUser(enteredUsername, enteredAge);

    // Number()를 사용해 변수를 숫자로 변환
    // if (Number(enteredAge) < 1) {
    //   return;
    // }

    // 이 코드 자체로 문제는 없지만 좀 더 안전하게 하기위해 +, Number()를 사용하는걸 추천
    // 의도치 않은 오류를 방지하기 위해서 위의 두 가지 방법을 사용
    // if (enteredAge < 1) {
    //   return;
    // }
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <div>
      <ErrorModal
        title="오류가 발생했습니다!"
        message="무엇인가 잘못된 거 같습니다."
      />
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
