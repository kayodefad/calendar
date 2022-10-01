import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #0c3738;
  padding: 20px;
  border-right: 7px solid #1b598d;
  border-left: 7px solid #1b598d;
  width: 100%;
  max-width: 700px;
  margin: auto;

  .calendar-header,
  .calendar-footer {
    color: #bdf0cc;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
  }

  .calendar-body {
    overflow: auto;
    .calendar-body-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      min-width: 600px;
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
        width: 80px;
        height: 80px;
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
  }
`;
