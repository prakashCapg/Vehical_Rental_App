import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";
import { useDateContext } from "../../context/DateContext";

const CalendarWidget = () => {
  const { selectedDate, setSelectedDate } = useDateContext();
  const handlePrevDate = () => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1))
    );
  };
  const handleNextDate = () => {
    setSelectedDate(
      (prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 1))
    );
  };
  const isToday = selectedDate.toDateString() === new Date().toDateString();
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={
          <div className="N_cal-container">
            <button onClick={handlePrevDate} className="N_cal-button">
              {"<"}
            </button>
            <div className="N_cal-input" onClick={(e) => e.preventDefault()}>
              {formatDate(selectedDate)}
              {isToday && <div className="N_cal-today">Today</div>}
            </div>
            <button onClick={handleNextDate} className="N_cal-button">
              {">"}
            </button>
          </div>
        }
      />
    </div>
  );
};
export default CalendarWidget;
