import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Rating = () => {
  const [rate, setRate] = React.useState(-1);
  const params = useParams();
  const ratingArray = Array.from({ length: 5 }, (a, b) => {
    if (b > rate) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <Wrap>
        <Title>
          오늘은 <span>{params.id}요일</span> 입니다.
        </Title>
        <h3>오늘의 기분을 골라주세요</h3>
        <Container>
          {ratingArray.map((item, index) => (
            <div key={index}>
              <Circle
                number={item}
                onClick={() => {
                  setRate(index);
                }}
              />
            </div>
          ))}
        </Container>
        <Link to={"/"}>
          <Button>
            <h3>홈으로 돌아가기</h3>
          </Button>
        </Link>
      </Wrap>
    </div>
  );
};

const Button = styled.div`
  padding: 5px 10px 15px 10px;
  margin: 60px auto;
  width: 160px;
  height: 50px;
  color: white;
  background-color: purple;
  h3 {
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: xx-large;
  font-weight: bold;
  span {
    color: white;
    background-color: brown;
    padding: 10px;
    border-radius: 10px;
  }
`;

const Wrap = styled.div`
  padding: 50px;
  text-align: center;
  margin: 50px auto;
  width: 20vw;
  height: 80vh;
  border: solid purple 1px;
  border-radius: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  width: 100%;
  height: 140px;
  background-color: aliceblue;
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  transition: 0.5s background-color;
  background-color: ${(props) => (props.number === 0 ? "orange" : "gray")};
  margin: 40px 5px;
  &:hover {
    background-color: orange;
  }
`;

export default Rating;
