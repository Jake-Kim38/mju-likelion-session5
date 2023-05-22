import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = ({ onShow }) => {
  const setShow = onShow.setShow;
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1", {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
        },
      })
      .then(function (response) {
        setMovies(response.data.results);
      });
  }, []);
  console.log(movies);
  const handleNavigate = (idx) => {
    navigate(`/boards/${movies[idx].id}`);
  };
  return (
    <>
      <Header onShow={setShow} />
      <OrDiv>
        <OrLine color="gray" />
      </OrDiv>
      <RankTitle>박스오피스 순위</RankTitle>
      <ScrollArea>
        {movies.map((item, index) => (
          <ContentArea key={item.id} onClick={() => handleNavigate(index)}>
            <TopContent>
              <MovieRank color="black">{index + 1}</MovieRank>
              <ImgDiv
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            </TopContent>
            <BottomContent>
              <MovieTitle>{item.title}</MovieTitle>
              <MovieInfo>{item.release_date}</MovieInfo>
              <MovieInfo>평균⭐{item.vote_average}</MovieInfo>
              <MovieInfo>누적 관객 {Math.ceil(item.popularity)} 만명</MovieInfo>
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
