import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BucketList = () => {
  const count = useSelector((state) => state.bucketReducer.bucketlist);
  return (
    <Wrap>
      {count.map((item, index) => {
        return (
          <Box key={index}>
            <h1>{item["text"]}</h1>
          </Box>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  height: 55vh;
  background-color: aqua;
`;

const Box = styled.div`
  text-align: start;
  padding-top: 5px;
  width: 100%;
  height: 55px;
  margin-top: 15px;
  background-color: gainsboro;
  h1 {
    margin-left: 20px;
    font-size: large;
    font-weight: bold;
    color: black;
  }
`;

export default BucketList;
