import styled from "styled-components";
import watcha_img from "../assets/image/icon_logo.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const setShow = props.onShow;
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };
  return (
    <TopDiv>
      <TopLeftDiv>
        <TitleImg src={watcha_img} onClick={() => goHome()} />
        {["영화", "TV", "책", "웹툰"].map((item) => (
          <InsideContent key={item}>{item}</InsideContent>
        ))}
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
  cursor: pointer;
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

export default Header;
