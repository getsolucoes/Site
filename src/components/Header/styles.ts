import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Color-background);
  position: fixed;
  z-index: 5;
`;

const StyledContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const StyledLogo = styled.div`
  position: relative;
  width: 100px;
  height: 40px;
  object-fit: contain;
  object-position: center;
`;

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;

  li {
    a {
      font-family: "Raleway", sans-serif;
      color: var(--Color-text-primary);
      transition: 0.3s;
    }
    & > a {
      font-size: 16px;
      font-weight: 700;
      &:hover {
        color: var(--Color-text-secondary);
      }
    }
    & > .button_menu {
      padding: 10px 25px;
      border-radius: 4px;
      border: 1px solid #cdd1d9;
      transition: 0.3s;
      & > a {
        font-size: 14px;
        font-weight: 500;
      }
      &:hover {
        background-color: var(--Color-text-secondary);
        & > a {
          color: var(--Color-background);
        }
      }
    }
  }
`;

const StyledDarkMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 20px;
  background-color: var(--Color-text-secondary);
  gap: 5px;
  font-size: 12px;
  color: white;
  border-radius: 20px;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10px;
    height: 10px;
    font-size: 10px;
    font-weight: 400;
    opacity: 0.5;
    transition: right 0.17s ease;
  }

  .active {
    width: 16px;
    height: 16px;
    background-color: black;
    font-size: 12px;
    border-radius: 50%;
    opacity: unset;
    box-shadow: 0 0 2px rgb(0 0 0 / 10%);
    transition: left 0.17s ease;
  }
`;

export {
  StyledHeader,
  StyledContainer,
  StyledLogo,
  StyledMenu,
  StyledDarkMode,
};
