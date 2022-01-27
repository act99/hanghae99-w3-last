import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RatingHome = () => {
  let weekday = [
    [0, "월"],
    [0, "화"],
    [0, "수"],
    [0, "목"],
    [0, "금"],
    [0, "토"],
    [0, "일"],
  ];
  let date = new Date();
  let dDay = date.getDay();
  let TodayWeek = [];
  TodayWeek = [
    ...weekday.slice(dDay - 1, weekday.length),
    ...weekday.slice(0, dDay - 1),
  ];
  let min = 0;
  let max = 5;
  for (let i = 0; i < TodayWeek.length; i++) {
    TodayWeek[i][0] = Math.floor(Math.random() * (max - min) + 1) + min;
  }

  return (
    <div>
      {TodayWeek.map((item, index) => {
        return (
          <div key={index}>
            <Container>
              <h3>{item[1]}</h3>
              <MakingCircle number={item[0]} />
              <Link to={"/reviews/" + item[1]}>
                <Trianlge />
              </Link>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: white;
  margin-bottom: 10px;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 25px;
  transition: 0.5s background-color;
  background-color: ${(props) => (props.number === 0 ? "orange" : "gray")};
  margin: 15px 10px;
`;

const Trianlge = styled.div`
  margin: 10px 10px;
  width: 0px;
  height: 0px;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 40px solid green;
`;

const MakingCircle = (props) => {
  const full = Array.from({ length: 5 }, (a, b) => {
    if (b >= props.number) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div style={{ display: "flex" }}>
      {full.map((item, index) => {
        return (
          <div key={index}>
            <Circle number={item} true={false} />
          </div>
        );
      })}
    </div>
  );
};

export default RatingHome;
