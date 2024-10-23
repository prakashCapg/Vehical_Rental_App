import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

const CalendarWidget = ({ selectedDate, onSelectedDate }) => {
  const handlePrevDate = () => {
    return handleSelectingDate(
      new Date(selectedDate.setDate(selectedDate.getDate() - 1))
    );
  };
  const handleNextDate = () => {
    return handleSelectingDate(
      new Date(selectedDate.setDate(selectedDate.getDate() + 1))
    );
  };
  const isToday = () => {
    return handleSelectingDate(new Date());
  };
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const handleSelectingDate = (date) => {
    return onSelectedDate(date);
  };
  return (
    <div className="N_date-picker-input">
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectingDate}
        customInput={
          <div className="N_cal-container">
            <button onClick={handlePrevDate} className="N_cal-button">
              {"<"}
            </button>
            <div className="N_cal-input" onClick={(e) => e.preventDefault()}>
              {formatDate(selectedDate)}
              <button className="N_cal-today" onClick={isToday}>
                Today
              </button>
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
