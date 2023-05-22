import { useParams } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Board = ({ onShow }) => {
  const params = useParams();
  const setShow = onShow.setShow;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.rank}?language=ko-KR`, {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then(function (response) {
        setMovie(response.data);
      });
  }, [params.rank]);

  return (
    <>
      <Header onShow={setShow} />
      <MainArea>
        <BgColor color="#F1E47B" />
        <ImgDiv src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <ContentArea>
          <TopContent>
            누적관객 &nbsp;{Math.ceil(movie.popularity)}만명
          </TopContent>
          <BottomContent>
            <TitleArea>{movie.title}</TitleArea>
            <SubTitleArea>
              {movie.release_date} •{" "}
              {movie.original_language && movie.original_language.toUpperCase()}{" "}
              • {movie.genres && movie.genres.map((item) => `${item.name} `)}
            </SubTitleArea>
            <OrLine color="#7f7f7f" />
            <ScoreArea>
              평균 ⭐{movie.vote_average} ({Math.ceil(movie.popularity)}만명)
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
          {movie.original_title} <br /> {movie.release_date} <br />{" "}
          {movie.genres && movie.genres.map((item) => `${item.name} `)}
        </AboutMovie>
        <Description>{movie.overview}</Description>
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
