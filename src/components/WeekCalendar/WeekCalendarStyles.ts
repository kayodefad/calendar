import styled, { css } from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: green;
  gap: 30px;
  padding: 20px;
  border-right: 7px solid blue;
  border-left: 7px solid blue;

  .icon-wrapper {
    width: 25px;
    cursor: pointer;
  }

  .date-wrapper {
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    background-color: white;
    width: 60px;
    height: 90px;
  }

  .day {
    color: #bdf0cc;
    font-weight: 900;
  }

  .date {
    color: #bdf0cc;
    text-transform: capitalize;
  }
`;
