import React from "react";
import styled from "styled-components";
import RatingHome from "../components/assignment/RatingHome";
import "../App.css";
import BucketList from "../components/bucketlist/BucketList";
import AddBucket from "../components/bucketlist/AddBucket";

const Home = () => {
  return (
    <div className="App">
      <Layout>
        <Wrap>
          <Title>내 버킷리스트</Title>
          <Line />
          <BucketList />
          <AddBucket />
        </Wrap>
        <Wrap>
          <Title>이번주 과제</Title>
          <Line />
          <RatingHome />
        </Wrap>
      </Layout>
    </div>
  );
};

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Wrap = styled.div`
  padding: 50px;
  text-align: center;
  margin: 50px;
  width: 20vw;
  height: 80vh;
  border: solid purple 1px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: xx-large;
  font-weight: bold;
  color: purple;
`;

const Line = styled.hr`
  border-top: 1px dotted purple;
`;

export default Home;
