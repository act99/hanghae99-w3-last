import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const AddBucket = () => {
  const count = useSelector((state) => state.bucketReducer.bucketlist);
  console.log(count);
  const input = React.useRef(null);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log(input.current.value);
  };

  return (
    <div>
      <StyledInput
        ref={input}
        placeholder="버킷리스트를 입력해주세요."
        type="text"
      />
      <Button onClick={onClickHandler}>추가하기</Button>
    </div>
  );
};

const StyledInput = styled.input`
  margin-top: 40px;
  height: 50px;
  width: 60%;
  padding-left: 20px;
  background-color: white;
  border: 0px;
  font-size: 16px;
  border: solid purple;
  border-radius: 10px;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px purple;
  }
`;

const Button = styled.button`
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  margin-left: 10px;
  background-color: purple;
  font-size: large;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export default AddBucket;
