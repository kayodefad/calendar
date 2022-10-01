import { useEffect, useState } from "react";
import { addDays, format, getDate, isSameDay, startOfWeek } from "date-fns";
import { Container, Wrapper } from "./WeekCalendarStyles";
import ChevronLeft from "../../shared/icons/ChevronLeft";
import ChevronRight from "../../shared/icons/ChevronRight";

type WeekCalendarProps = {
  date: Date;
  onChange: (value: Date) => void;
};

const WeekCalendar = ({ date, onChange }: WeekCalendarProps) => {
  const [week, setWeek] = useState<WeekDay[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  return (
    <Container>
      <Wrapper>
        <div className="icon-wrapper">
          <ChevronLeft />
        </div>
        {week.map((weekDay) => {
          // const textStyles = [styles.label];
          // const touchable = [styles.touchable];

          const sameDay = isSameDay(weekDay.date, date);
          // if (sameDay) {
          //   textStyles.push(styles.selectedLabel);
          //   touchable.push(styles.selectedTouchable);
          // }

          return (
            <div
              className="date-wrapper"
              key={weekDay.formatted}
              onClick={() => onChange(weekDay.date)}>
              <p className="day">{weekDay.formatted}</p>
              <p className="date">{weekDay.day}</p>
            </div>
          );
        })}
        <div className="icon-wrapper">
          <ChevronRight />
        </div>
      </Wrapper>
    </Container>
  );
};

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
};

// get week days
export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, "EEE"),
      date,
      day: getDate(date),
    });
  }

  return final;
};

export default WeekCalendar;
