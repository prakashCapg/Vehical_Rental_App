import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './style.css'; 

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevDate = () => {
    setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() - 1)));
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + 1)));
  };

  const isToday = selectedDate.toDateString() === new Date().toDateString();

  
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = date.toLocaleString('default', { month: 'short' }); 
    const year = date.getFullYear(); 

    return `${day} ${month} ${year}`; 
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        customInput={
          <div className="cal-container">
            <button onClick={handlePrevDate} className="cal-button">{'<'}</button>
            <div className="cal-input" onClick={(e) => e.preventDefault()}>
              {formatDate(selectedDate)}
              {isToday && <div className="cal-today">Today</div>}
            </div>
            <button onClick={handleNextDate} className="cal-button">{'>'}</button>
          </div>
        }
      />
    </div>
  );
};

export default Calendar;
