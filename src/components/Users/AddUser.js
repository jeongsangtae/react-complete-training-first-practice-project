import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "입력 값이 비어있습니다.",
        message: "이름과 나이를 비어있지 않게 입력해 주세요.",
      });
      return;
    }

    // 단항 덧셈 연산자를 사용해 변수를 강제로 숫자로 변환
    if (+enteredUserAge < 1) {
      setError({
        title: "나이 입력이 잘못되었습니다.",
        message: "나이는 0 이상을 입력해 주세요.",
      });
      return;
    }

    console.log(enteredName, enteredUserAge);

    // AddUser 컴포넌트에서 먼저 저장하는 코드
    // 내가 짠 코드
    // const saveUserData = {
    //   username: enteredUsername,
    //   age: +enteredAge,
    //   // id: Math.random().toString(),
    // };

    props.onAddUser(enteredName, enteredUserAge);

    // Number()를 사용해 변수를 숫자로 변환
    // if (Number(enteredAge) < 1) {
    //   return;
    // }

    // 이 코드 자체로 문제는 없지만 좀 더 안전하게 하기위해 +, Number()를 사용하는걸 추천
    // 의도치 않은 오류를 방지하기 위해서 위의 두 가지 방법을 사용
    // if (enteredAge < 1) {
    //   return;
    // }
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
