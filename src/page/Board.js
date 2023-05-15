import { useParams } from "react-router-dom";
import { DATA } from "../assets/Data";
import Header from "../components/Header";
import styled from "styled-components";

const Board = (props) => {
  const params = useParams();
  const id = parseInt(params.rank) - 1;
  const setShow = props.onShow;
  const movie = DATA[id];

  return (
    <>
      <Header onShow={setShow} />
      <MainArea>
        <BgColor color="#F1E47B" />
        <ImgDiv src={movie.img} />
        <ContentArea>
          <TopContent>
            예매순위: {movie.rank}위({movie.percent}) • 누적관객
            {movie.audience / 10000}만명
          </TopContent>
          <BottomContent>
            <TitleArea>{movie.title}</TitleArea>
            <SubTitleArea>
              {movie.year} • {movie.genre} • {movie.country}
            </SubTitleArea>
            <OrLine color="#7f7f7f" />
            <ScoreArea>
              평균 ⭐{movie.average} ({movie.audience / 10000}만명)
            </ScoreArea>
            <OrLine color="#7f7f7f" />
            <BottomLine>
              <Stars>
                평가하기
                <br />
                ⭐⭐⭐⭐⭐
              </Stars>
              <UpLine color="#7f7f7f" />
              <Selections>
                ➕보고싶어요 &nbsp;&nbsp;&nbsp; ✏️코멘트 &nbsp;&nbsp;&nbsp;
                👁️‍🗨️보는중 &nbsp;&nbsp;&nbsp; 🎥더보기
              </Selections>
            </BottomLine>
          </BottomContent>
        </ContentArea>
      </MainArea>
      <DivisionLine />
      <AboutBlock>
        <AboutTitle>
          <Info>기본 정보</Info>
          <More color="#FF2F6E">더보기</More>
        </AboutTitle>
        <AboutMovie color="#7f7f7f">
          {movie.originalTitle} <br /> {movie.year} • {movie.country} •{" "}
          {movie.genre} <br /> {movie.runningTime} • {movie.age}
        </AboutMovie>
        <Description>{movie.description}</Description>
      </AboutBlock>
    </>
  );
};

const BgColor = styled.div`
  width: 100%;
  height: 28vh;
  background: ${(props) => props.color || "#F1E47B"};
  opacity: 0.6;
  order: 2;
`;

const MainArea = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const ImgDiv = styled.img`
  width: 30vh;
  height: 40vh;
  position: absolute;
  left: 15vh;
  top: 20vh;
`;

const ContentArea = styled.div`
  width: 140vh;
  height: 40vh;
  position: absolute;
  bottom: 10%;
  margin-left: 15%;
`;

const TopContent = styled.div`
  width: 140vh;
  height: 5vh;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.color || "#7f7f7f"};
`;

const BottomContent = styled.div`
  width: 140vh;
  height: 35vh;
`;

const TitleArea = styled.div`
  width: 140vh;
  height: 10vh;
  font-size: 35px;
  font-weight: bold;
`;

const SubTitleArea = styled.div`
  width: 140vh;
  height: 5vh;
  font-size: 15px;
  color: ${(props) => props.color || "#7f7f7f"};
`;

const ScoreArea = styled.div`
  width: 140vh;
  height: 5vh;
  font-size: 25px;
`;

const BottomLine = styled.div`
  width: 140vh;
  height: 15vh;
  display: flex;
  margin-top: 1%;
`;

const Stars = styled.div`
  width: 30vh;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) => props.color || "#7f7f7f"};
`;

const Selections = styled.div`
  width: 100vh;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OrLine = styled.div`
  width: 95%;
  height: 1px;
  margin-top: 1%;
  background: ${(props) => props.color || "#7f7f7f"};
`;

const DivisionLine = styled.div`
  width: 90%;
  height: 1px;
  margin: auto;
  background: ${(props) => props.color || "#7f7f7f"};
`;

const UpLine = styled.div`
  width: 1px;
  height: 50px;
  background: ${(props) => props.color || "#7f7f7f"};
`;

const AboutBlock = styled.div`
  width: 70%;
  height: 50vh;
  margin: auto;
`;

const AboutTitle = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

const More = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${(props) => props.color || "#FF2F6E"};
  margin-top: 3vh;
`;

const AboutMovie = styled.div`
  width: 50%;
  height: 10vh;
  margin-top: 3%;
  color: ${(props) => props.color || "#7f7f7f"};
`;

const Description = styled.div`
  width: 70%;
  height: 35vh;
  font-weight: 600;
  margin-top: 3%;
`;

export default Board;
