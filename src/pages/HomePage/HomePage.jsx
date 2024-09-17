import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    navigate("/vehicles");
  };
  return (
    <div className='min-h-screen'>
      <center>
        <form onSubmit={handlesubmit}>
          <label>Please select date:</label>
          <br />
          <input
             type="date"
            value={selectedDate}
            onChange={handleDateChange}
            required
            className="border-solid border-2 border-black-600 mt-5"
          />{" "}
          <br />
          <button
            type="submit"
            className="w-[80px] py-2 bg-orange-400 text-white hover:bg-orange-600 mt-5 rounded-sm "
          >
            Submit
          </button>
        </form>
      </center>
    </div>
  );
};

export default Home;
