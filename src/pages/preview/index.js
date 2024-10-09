

import BookingHistory from "../BookingHistory/BookingHistory";
import InputFieldDate from "../../components/InputField_Date/InputField_Date";
import ImageUpload from "../../components/ImageUpload/Index";
import Dropdown from "../../components/Dropdown/Dropdown";
import Card1 from "../../components/Card1/Card1";



  return (
    <div className="min-h-screen">
      <h1>Preview</h1>



      {/*<LoginPopup />*/}

      <Workflow />

      <Buttons />

      <InputFieldText label="Enter text or digits:">
        <p>Please input letters or numbers only.</p>
      </InputFieldText>

      <InputFieldDate label="Select a date:">
        <p>Please pick a date from the calendar.</p>
      </InputFieldDate>

      <ImageUpload />



      {/* <InputField_Search
        apiEndPoint="http://localhost:3002/bookings"
        navigation="/employee/booking-details"
      /> */}
      {/* <BookingHistory /> */}

      <Accordion />

      <Tracking />
      <Calendar />

    </div>
  );
};

export default Preview;
