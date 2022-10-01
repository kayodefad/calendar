import { useEffect, useState } from "react";
import { addDays, format, isSameDay, isToday } from "date-fns";
import classNames from "classnames";
import { Container, Wrapper } from "./WeekCalendarStyles";
import ChevronLeft from "../../shared/icons/ChevronLeft";
import ChevronRight from "../../shared/icons/ChevronRight";
import { WeekDay } from "../../shared/types/Weekday";
import { getCurrentMonthAndYear, getWeekDays } from "../../shared/utils";

const WeekCalendar = () => {
  const [week, setWeek] = useState<WeekDay[]>([]);
  const [date, setDate] = useState<Date>(new Date());
  const [selected, setSelected] = useState<Date>(new Date());

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  return (
    <Container>
      <Wrapper>
        {week.length && (
          <div className="calendar-header">
            {getCurrentMonthAndYear(week[0], week[6])}
          </div>
        )}
        <div className="calendar-body">
          <div className="calendar-body-content">
            <div
              onClick={() => setDate(addDays(week[0].date, -7))}
              className="icon-wrapper"
            >
              <ChevronLeft />
            </div>
            {week.map((weekDay) => {
              const today = isToday(weekDay.date);
              const sameday = isSameDay(weekDay.date, selected);

              return (
                <div
                  className={classNames("date-wrapper", {
                    today,
                    selected: sameday,
                  })}
                  key={weekDay.formatted}
                  onClick={() => setSelected(weekDay.date)}
                >
                  <p className="day">{weekDay.formatted}</p>
                  <p className="date">{weekDay.day}</p>
                </div>
              );
            })}
            <div
              onClick={() => setDate(addDays(week[0].date, 7))}
              className="icon-wrapper"
            >
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className="calendar-footer">
          {format(selected, "MMMM d,  yyyy")}
        </div>
      </Wrapper>
    </Container>
  );
};

export default WeekCalendar;
