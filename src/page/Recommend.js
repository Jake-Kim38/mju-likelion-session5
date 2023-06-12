import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { movieAtom } from "../atoms/movieAtom";
import styled from "styled-components";

const Recommend = () => {
  const recommends = useRecoilValue(movieAtom);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/boards/${id}`);
  };
  return (
    <>
      <MovieList>
        <TopTitle>추천작</TopTitle>
        {recommends.map((item) => (
          <MovieContent key={item.id} onClick={() => handleNavigate(item.id)}>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
            <MovieTitle>{item.title}</MovieTitle>
            <MovieAverage color="#7f7f7f">
              평균 ⭐ {item.vote_average} <br /> 영화
            </MovieAverage>
          </MovieContent>
        ))}
      </MovieList>
    </>
  );
};

const TopTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MovieList = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
`;

const MovieContent = styled.div`
  width: 20%;
  height: 40%;
  margin-top: 15px;
  margin-right: 15px;
  display: inline-block;
  cursor: pointer;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10%;
`;

const MovieTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const MovieAverage = styled.div`
  font-size: 10px;
  color: ${(props) => props.color || "#7f7f7f"};
`;

export default Recommend;
