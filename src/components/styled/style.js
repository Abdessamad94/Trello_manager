import styled from "styled-components";

export const Navbar = styled.header`
  min-height: 8vh;
  background-color: white;
  .in-nav {
    display: grid;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    grid-template-columns: 1fr 4fr 1fr;
    .logo {
      img {
        max-width: 90px;
      }
    }
  }
  box-shadow: 0px 0px 7px 1px #d5d5d5;
  border: 0.2px solid #cdcdcd;
  div {
    display: flex;
    align-items: center;
  }
  .logo {
    padding-left: 5%;
  }
  .avatar {
    justify-content: flex-end;
    padding-right: 5%;
  }
`;

export const Contianer = styled.section`
  width: 100%;
`;

export const HomeContianer = styled.section`
  width: 90%;
  margin-top: 8vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SyllabusContianer = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 8vh;
  height: calc(92vh - 10px);
  .addsyllabus {
    display: flex;
    height: 30%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .syllabus {
    height: 70%;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
  .syllabus::-webkit-scrollbar {
    display: none;
  }
`;

export const SyllabusDetailsContianer = styled.section`
  width: 90%;
  height: calc(92vh - 10px);
  display: flex;
  margin: 0 auto;
  & > div {
    margin-top: 10px;
  }
  .doc {
    width: 60%;
  }
  .homeworks {
    width: 40%;

    .addsyllabus {
      height: 40%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      .blur {
        border-radius: 10px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        filter: blur(3px);
      }
      .textarea textarea {
        width: 93%;
        border: 0.2px solid #cdcdcd;
        border-radius: 10px;
        margin: 5px;
        height: 120px;
        padding: 8px 10px;
      }
      .inputstext {
        select {
          border: 0.2px solid #cdcdcd;
          border-radius: 10px;
          margin: 5px;
          padding: 7px;
        }
      }
    }

    .syllabus {
      height: 60%;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .doc {
  }
`;

export const SyllabusCardStyled = styled.div`
  width: ${({ width }) => width};
  height: 100px;
  margin: 20px auto;
  box-shadow: 0px 0px 7px 1px #d5d5d5;
  border-radius: 8px;
  border: 0.2px solid #cdcdcd;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px 8px;
  .cradend {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
      height: 50%;
    }
    .opretions {
      display: flex;
      .icon {
        height: 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        width: 30px;
        margin-left: 10px;
        border-radius: 10px;
        border: 0.2px solid #cdcdcd;
        font-size: 20px;
        cursor: pointer;
      }
      .updateIcon {
        color: #7bff7b;
      }
      .deleteIcon {
        color: #ff8282;
      }
    }
    .info {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30%;
      width: 30px;
      border-radius: 10px;
      border: 0.2px solid #cdcdcd;
      font-size: 20px;
      cursor: pointer;
    }
  }
  .cradfront {
    padding-left: 10px;
    div {
      margin-bottom: 8px;
    }
    .name {
      display: flex;
    }
  }
`;

export const Btn = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: ${({ bg }) => bg};
  border-radius: 50px;
  border: 0.2px solid #cdcdcd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
  svg {
    margin-right: 5px;
    font-size: 15px;
  }
`;

export const inputText = styled.input`
  padding: 8px 10px;
  border: 0.2px solid #cdcdcd;
  border-radius: 10px;
  margin: 5px;
`;
export const inputFile = styled.input`
  padding: 8px 10px;
  border: 0.2px solid #cdcdcd;
  border-radius: 10px;
  margin: 5px;
`;

export const BgAnimation = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  div {
    width: 50px;
    height: 10px;
    background-color: black;
    border-raduis: 10px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(327deg);
    border-radius: 10px;
  }
`;

export const Section = styled.section`
  display: grid;
  height: calc(92vh - 10px);
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  & > div {
    width: 80%;
  }
  .img {
    img {
      max-width: 100%;
    }
  }
  .text {
    .title {
      display: flex;
      align-items: center;
      h1 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      svg {
        font-size: 40px;
        margin-right: 8px;
      }
    }
  }
`;
