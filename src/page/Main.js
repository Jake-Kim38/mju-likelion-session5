import styled from "styled-components";
import { DATA } from "../assets/Data";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Main = (props) => {
  const setShow = props.onShow;
  const navigate = useNavigate();

  const handleNavigate = (idx) => {
    navigate(`/boards/${DATA[idx].rank}`);
  };
  return (
    <>
      <Header onShow={setShow} />
      <OrDiv>
        <OrLine color="gray" />
      </OrDiv>
      <RankTitle>박스오피스 순위</RankTitle>
      <ScrollArea>
        {DATA.map((item, index) => (
          <ContentArea key={item.rank} onClick={() => handleNavigate(index)}>
            <TopContent>
              <MovieRank color="black">{item.rank}</MovieRank>
              <ImgDiv src={item.img} />
            </TopContent>
            <BottomContent>
              <MovieTitle>{item.title}</MovieTitle>
              <MovieInfo>
                {item.year} • {item.country}
              </MovieInfo>
              <MovieInfo>평균⭐{item.average}</MovieInfo>
              <MovieInfo>
                예매율 {item.percent} • 누적 관객 {item.audience / 10000} 만명
              </MovieInfo>
            </BottomContent>
          </ContentArea>
        ))}
      </ScrollArea>
    </>
  );
};

const OrDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1%;
`;

const OrLine = styled.div`
  width: 95%;
  height: 1px;
  background: ${(props) => props.color || "gray"};
`;

const RankTitle = styled.div`
  width: 35vh;
  height: 10vh;
  font-size: 25px;
  font-weight: 600;
  margin-left: 3%;
  margin-top: 1%;
`;

const ScrollArea = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const ContentArea = styled.div`
  display: inline-block;
  width: 50vh;
  height: 70vh;
  position: relative;
  margin-left: 5%;
  cursor: pointer;
`;

const TopContent = styled.div`
  width: 10vh;
  height: 10vh;
`;

const ImgDiv = styled.img`
  width: 30vh;
  height: 50vh;
`;

const MovieRank = styled.div`
  width: 4vh;
  height: 4vh;
  background: ${(props) => props.color || "black"};
  color: white;
  border-radius: 10%;
  position: absolute;
  left: 5%;
  top: 3%;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomContent = styled.div`
  width: 50vh;
  height: 20vh;
  position: absolute;
  bottom: 0;
`;

const MovieTitle = styled.div`
  font-size: 20px;
  width: 10px;
  font-weight: bold;
`;

const MovieInfo = styled.div`
  font-size: 10px;
  font-weight: 500;
`;

export default Main;
