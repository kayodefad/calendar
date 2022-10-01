import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #0c3738;
  padding: 20px;
  border-right: 7px solid #1b598d;
  border-left: 7px solid #1b598d;

  .calendar-header {
    color: #bdf0cc;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  .calendar-body {
    display: flex;
    align-items: center;
    gap: 30px;

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
      width: 60px;
      height: 90px;
      color: #bdf0cc;

      &.selected {
        background-color: #fff;
        color: #1b598d;
      }

      &.today {
        color: #fff;
        background-color: #1b598d;
        pointer-events: none;
      }
    }

    .day {
      font-weight: 900;
    }

    .date {
      text-transform: capitalize;
    }
  }
`;
