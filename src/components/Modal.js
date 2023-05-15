import styled from "styled-components";
import watcha_img from "../assets/image/icon_logo.png";
import kakao_img from "../assets/image/icon_kakao.png";
import google_img from "../assets/image/icon_google.png";
import twitter_img from "../assets/image/icon_twitter.png";
import line_img from "../assets/image/icon_line.png";

const Modal = (props) => {
  const isShow = props.data;
  const setShow = props.onShow;
  if (isShow) {
    return (
      <>
        <WideBlock color="gray">
          <LoginBlock color="white">
            <CloseButton onClick={() => setShow(false)}>&times;</CloseButton>
            <TitleImage src={watcha_img} />
            <LoginTitle>로그인</LoginTitle>
            <LoginInput placeholder="이메일" color="#C9C9CF" />
            <LoginInput placeholder="비밀번호" color="#C9C9CF" />
            <LoginButton color="#FF0558">로그인</LoginButton>
            <ForgetPassword color="#FF0558">
              비밀번호를 잊어버리셨나요?
            </ForgetPassword>
            <CheckArea>
              <NoId>계정이 없으신가요?</NoId>
              <JoinIn>회원가입</JoinIn>
            </CheckArea>
            <OrDiv>
              <OrLine color="gray" />
              &nbsp;OR&nbsp;
              <OrLine color="gray" />
            </OrDiv>
            <ImageArea>
              <SelectImage src={kakao_img} />
              <SelectImage src={google_img} />
              <SelectImage src={twitter_img} />
              <SelectImage src={line_img} />
            </ImageArea>
            <ExplainArea color="#C9C9CF">
              TIP: 왓챠 계정이 있으신가요? 왓챠와 왓챠피디아는 같은 계정을
              사용해요
            </ExplainArea>
          </LoginBlock>
        </WideBlock>
      </>
    );
  }
};

const WideBlock = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.color || "gray"};
`;

const LoginBlock = styled.div`
  margin: auto;
  width: 65vh;
  height: 100vh;
  background: ${(props) => props.color || "white"};
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  width: 5vh;
  height: 5vh;
  border-radius: 5%;
  border: none;
  background: white;
  cursor: pointer;
  margin-left: 3%;
  margin-top: 3%;
  font-size: 30px;
  align-self: flex-start;
`;

const TitleImage = styled.img`
  width: 50vh;
  height: 10vh;
`;

const LoginTitle = styled.div`
  width: 50vh;
  height: 5vh;
  text-align: center;
  font-weight: 600;
`;

const LoginInput = styled.input`
  width: 50vh;
  height: 5vh;
  border: none;
  border-radius: 3%;
  margin-top: 3%;
  background: ${(props) => props.color || "#C9C9CF"};
  font-weight: 600;
`;

const LoginButton = styled.button`
  width: 50vh;
  height: 7vh;
  border: none;
  border-radius: 3%;
  margin-top: 5%;
  background: ${(props) => props.color || "#FF0558"};
  font-weight: 600;
  cursor: pointer;
  color: white;
`;

const ForgetPassword = styled.h3`
  width: 50vh;
  margin-top: 5%;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  color: ${(props) => props.color || "#FF0558"};
`;

const CheckArea = styled.div`
  width: 50vh;
  height: 7vh;
  display: flex;
  justify-content: space-evenly;
  margin-top: -5%;
`;

const NoId = styled.h3`
  color: ${(props) => props.color || "#C9C9CF"};
`;

const JoinIn = styled.h3`
  cursor: pointer;
  color: ${(props) => props.color || "#FF0558"};
`;

const OrDiv = styled.div`
  width: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

const OrLine = styled.div`
  width: 30vh;
  height: 1px;
  background: ${(props) => props.color || "gray"};
`;

const ImageArea = styled.div`
  width: 50vh;
  height: 7vh;
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
`;

const SelectImage = styled.img`
  width: 10vh;
  height: 10vh;
  cursor: pointer;
`;

const ExplainArea = styled.div`
  width: 55vh;
  height: 10vh;
  background: ${(props) => props.color || "#C9C9CF"};
  color: #707070;
  border-radius: 5%;
  margin-top: 10%;
  display: flex;
  align-items: center;
`;

export default Modal;
