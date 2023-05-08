import styled from "styled-components";
import { DATA } from "../assets/Data";
import watcha from "../assets/image/icon_logo.png";

const Main = (props) => {
  const setShow = props.onShow;
  return (
    <>
      <TopDiv>
        <TopLeftDiv>
          <TitleImg src={watcha} />
          <InsideContent>영화</InsideContent>
          <InsideContent>TV</InsideContent>
          <InsideContent>책</InsideContent>
          <InsideContent>웹툰</InsideContent>
        </TopLeftDiv>
        <TopRightDiv>
          <SearchInput
            placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
            color="#C9C9CF"
          ></SearchInput>
          <LoginButton onClick={() => setShow(true)}>Login</LoginButton>
          <JoinButton>회원가입</JoinButton>
        </TopRightDiv>
      </TopDiv>
      <OrDiv>
        <OrLine color="gray" />
      </OrDiv>
      <RankTitle>박스오피스 순위</RankTitle>
      <ScrollDiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[0].rank}</RankDiv>
            <ImgDiv src={DATA[0].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[0].title}</MovieTitle>
            <MovieInfo>
              {DATA[0].year} • {DATA[0].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[0].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[0].percent} • 누적 관객 {DATA[0].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[1].rank}</RankDiv>
            <ImgDiv src={DATA[1].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[1].title}</MovieTitle>
            <MovieInfo>
              {DATA[1].year} • {DATA[1].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[1].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[1].percent} • 누적 관객 {DATA[1].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[2].rank}</RankDiv>
            <ImgDiv src={DATA[2].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[2].title}</MovieTitle>
            <MovieInfo>
              {DATA[2].year} • {DATA[2].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[2].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[2].percent} • 누적 관객 {DATA[2].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[3].rank}</RankDiv>
            <ImgDiv src={DATA[3].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[3].title}</MovieTitle>
            <MovieInfo>
              {DATA[3].year} • {DATA[3].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[3].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[3].percent} • 누적 관객 {DATA[3].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[4].rank}</RankDiv>
            <ImgDiv src={DATA[4].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[4].title}</MovieTitle>
            <MovieInfo>
              {DATA[4].year} • {DATA[4].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[4].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[4].percent} • 누적 관객 {DATA[4].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[5].rank}</RankDiv>
            <ImgDiv src={DATA[5].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[5].title}</MovieTitle>
            <MovieInfo>
              {DATA[5].year} • {DATA[5].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[5].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[5].percent} • 누적 관객 {DATA[5].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[6].rank}</RankDiv>
            <ImgDiv src={DATA[6].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[6].title}</MovieTitle>
            <MovieInfo>
              {DATA[6].year} • {DATA[6].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[6].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[6].percent} • 누적 관객 {DATA[6].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[7].rank}</RankDiv>
            <ImgDiv src={DATA[7].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[7].title}</MovieTitle>
            <MovieInfo>
              {DATA[7].year} • {DATA[7].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[7].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[7].percent} • 누적 관객 {DATA[7].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[8].rank}</RankDiv>
            <ImgDiv src={DATA[8].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[8].title}</MovieTitle>
            <MovieInfo>
              {DATA[8].year} • {DATA[8].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[8].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[8].percent} • 누적 관객 {DATA[8].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
        <Contentdiv>
          <TopContent>
            <RankDiv>{DATA[9].rank}</RankDiv>
            <ImgDiv src={DATA[9].img} />
          </TopContent>
          <BottomContent>
            <MovieTitle>{DATA[9].title}</MovieTitle>
            <MovieInfo>
              {DATA[9].year} • {DATA[9].country}
            </MovieInfo>
            <MovieInfo>평균⭐{DATA[9].average}</MovieInfo>
            <MovieInfo>
              예매율 {DATA[9].percent} • 누적 관객 {DATA[9].audience / 10000}{" "}
              만명
            </MovieInfo>
          </BottomContent>
        </Contentdiv>
      </ScrollDiv>
    </>
  );
};

const TopDiv = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
`;

const TopLeftDiv = styled.div`
  width: 40%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TitleImg = styled.img`
  width: 25vh;
  height: 8vh;
`;

const InsideContent = styled.div`
  cursor: pointer;
  color: black;
`;

const TopRightDiv = styled.div`
  width: 40%;
  height: 10vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 50vh;
  height: 5vh;
  border: none;
  border-radius: 3%;
  background: ${(props) => props.color || "#C9C9CF"};
  font-weight: 600;
`;

const LoginButton = styled.button`
  width: 10vh;
  height: 5vh;
  border: none;
  cursor: pointer;
`;

const JoinButton = styled.button`
  width: 15vh;
  height: 5vh;
  cursor: pointer;
`;

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

const ScrollDiv = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Contentdiv = styled.div`
  display: inline-block;
  width: 50vh;
  height: 70vh;
  position: relative;
  margin-left: 5%;
`;

const TopContent = styled.div`
  width: 10vh;
  height: 10vh;
`;

const ImgDiv = styled.img`
  width: 30vh;
  height: 50vh;
`;

const RankDiv = styled.div`
  width: 4vh;
  height: 4vh;
  background: black;
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
