import { useState } from "react";
import Header from "./components/Header/Header";
import WeekCalendar from "./components/WeekCalendar/WeekCalendar";

const App = () => {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Header />
      <WeekCalendar date={date} onChange={(newDate) => setDate(newDate)} />
    </>
  );
};

export default App;
